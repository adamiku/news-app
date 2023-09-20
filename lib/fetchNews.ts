import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

async function fetchNews(
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) {
  // GraphQL query
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "gb"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          country
          category
          description
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;

  // Fetch function with nextjs 13. caching...
  const response = await fetch(process.env.STEPZEN_API_URL!, {
    method: "POST",
    cache: isDynamic ? "no-cache" : "default",
    next: isDynamic ? { revalidate: 0 } : { revalidate: 60 },
    headers: {
      "Content-Type": "application/json",
      Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
    },
    body: JSON.stringify({
      query,
      variables: {
        access_key: process.env.MEDIASTACK_API_KEY,
        categories: category,
        keywords,
      },
    }),
  });

  const newsResponse = await response.json();

  // Sort function by images vs not images present
  const sortedNews = sortNewsByImage(newsResponse.data.myQuery);
  // Return response

  return sortedNews;
}

export default fetchNews;

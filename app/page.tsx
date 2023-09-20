import NewsList from "@/components/NewsList";
import { categories } from "@/constants";
import fetchNews from "@/lib/fetchNews";
import sortNewsByImage from "@/lib/sortNewsByImage";
import newsResponse from "@/newsResponse.json";

async function Homepage() {
  // const news: NewsResponse = await fetchNews(categories.join(","));
  const news: NewsResponse =
    sortNewsByImage(newsResponse) || (await fetchNews(categories.join(",")));

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}

export default Homepage;

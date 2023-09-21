import NewsList from "@/components/NewsList";
import { categories } from "@/constants";
import fetchNews from "@/lib/fetchNews";

async function Homepage() {
  const news: NewsResponse = await fetchNews(categories.join(","));

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}

export default Homepage;

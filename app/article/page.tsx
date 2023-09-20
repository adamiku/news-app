import { notFound } from "next/navigation";

type Props = {
  searchParams?: Article;
};

function ArticlePage({ searchParams }: Props) {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }

  const article: Article = searchParams;
  console.log(searchParams);
  return (
    <article>
      <section>
        {article.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="h-[50px] max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
            src={article.image}
            alt={article.title}
          />
        )}
      </section>
    </article>
  );
}

export default ArticlePage;

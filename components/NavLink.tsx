import clsx from "clsx";
import Link from "next/link";

type Props = {
  category: string;
  isActive: boolean;
};

function NavLink({ category, isActive }: Props) {
  return (
    <Link
      href={`/news/${category}`}
      className={clsx(
        isActive &&
          "underline decoration-orange-400 underline-offset-4 font-bold text-lg",
        "navLink inline-block"
      )}
    >
      {category}
    </Link>
  );
}

export default NavLink;

import { StrapiPagination } from "interfaces/strapi";
import Link from "next/link";
import { useRouter } from "next/router";

const Pagination = ({ pageSize, page, pageCount, total }: StrapiPagination) => {
  const router = useRouter();
  return (
    <div className="flex mb-8 space-x-3 border-t-2 border-gray-100 pt-4">
      {Array(pageCount)
        .fill(0)
        .map((e, i) => (
          <Link
          passHref
            href={{
              pathname: router.pathname,
              query: {
                page: i + 1,
              },
            }}
          >
            <a
              className={`flex rounded-md items-center justify-center  border-2  h-8 w-8 text-xs p-2 transition-all ${
                i === page - 1
                  ? " bg-primary-400 border-primary-400 text-white hover:border-primary-300"
                  : "border-gray-300 text-gray-500 hover:border-primary-300 hover:text-primary-400"
              }`}
            >
              {i + 1}
            </a>
          </Link>
        ))}
    </div>
  );
};

export default Pagination;

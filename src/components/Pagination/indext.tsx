import Link from "next/link";

const Pagination = () => {
  return (
    <div className="flex space-x-3 border-t-2 border-gray-100 pt-4">
      {Array(10)
        .fill(0)
        .map((e, i) => (
          <Link href={"google.com" + i}>
            <a
              className={`flex rounded-md items-center justify-center  border-2  h-8 w-8 text-xs p-2 transition-all ${
                i === 5
                  ? " bg-primary-400 border-primary-400 text-white hover:border-primary-300"
                  : "border-gray-300 text-gray-500 hover:border-primary-300 hover:text-primary-400"
              }`}
            >
              {i}
            </a>
          </Link>
        ))}
    </div>
  );
};

export default Pagination;

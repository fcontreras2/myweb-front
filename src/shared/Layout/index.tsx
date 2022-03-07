import AvatarComponent from "components/Avatar";
import GridWrapper from "components/Grid";
import { StrapiPagination } from "interfaces/strapi";
import Link from "next/link";
import Footer from "shared/Footer";
import NavBar from "shared/NavBar";

type ListProps = {
  title: string;
  component: JSX.Element | JSX.Element[];
  pagination?: StrapiPagination;
};

interface Props {
  children?: JSX.Element | JSX.Element[] | undefined;
  left?: ListProps;
  right?: ListProps;
  showAvatar?: boolean;
  className?: string;
  link?: string;
  pagination?: boolean;
}

const Layout = ({
  children,
  left,
  right,
  pagination,
  showAvatar,
  link,
  ...props
}: Props) => {

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div className="pb-16">
        <NavBar />
        {showAvatar && <AvatarComponent />}
        {children ? (
          <GridWrapper {...props}>{children}</GridWrapper>
        ) : (
          <GridWrapper className="relative" {...props}>
            <div className="col-span-16 lg:col-start-1 lg:col-end-11">
              <div className="flex justify-between items-end">
                <h4 className="text-2xl lg:text-3xl font-semibold border-b-2 w-32 border-b-primary-300">
                  {left?.title}
                </h4>
                {left?.pagination?.total && (
                  <p className="text-gray-600">
                    {left?.pagination.total} resultados
                  </p>
                )}
              </div>
              {left?.component}
              {pagination && <div>Pagination</div>}
              {link && (
                <Link href={link}>
                  <a className="text-primary-400 font-semibold">Ver todos</a>
                </Link>
              )}
            </div>
            <div className="col-span-16 lg:col-start-13 lg:col-span-4 sticky top-32">
              <div className="sticky ">
                <h4 className="text-lg font-semibold border-b-2 w-32 border-b-primary-300">
                  {right?.title}
                </h4>
                {right?.component}
              </div>
            </div>
          </GridWrapper>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

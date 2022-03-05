import Avatar from "components/Avatar";
import GridWrapper from "components/Grid";
import Footer from "shared/Footer";
import NavBar from "shared/NavBar";

type Props = {
  children: JSX.Element | JSX.Element[];
  avatar?: boolean;
  className?: string;
};
const Layout = ({ children, avatar,...props }: Props) => {
  return (
    <>
      <NavBar />
      { avatar && <Avatar />}
      <GridWrapper {...props}>{children}</GridWrapper>
      <Footer />
    </>
  );
};

export default Layout;

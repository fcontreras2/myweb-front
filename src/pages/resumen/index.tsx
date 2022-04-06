import GridWrapper from "components/Grid";
import Image from "components/Image";
import { GlobalContext } from "pages/_app";
import { useContext, useMemo } from "react";
import Footer from "shared/Footer";
import NavBar from "shared/NavBar";
import ResumenMain from "components/Resumen/ResumenMain";
import ResumenNavigation from "components/Resumen/ResumenNavigation";
import { fetchAPI } from "lib/api";
import {
  StrapiSimplePopulate,
} from "interfaces/strapi";
import { Resumen, RESUMEN_TYPE } from "interfaces/resumen";
import ResumenSectionComponent from "components/Resumen/ResumenSection";
import ResumenCertificatesComponent from "components/Resumen/ResumenCertificates";

type Props = {
  resumen: StrapiSimplePopulate<Resumen<any>>;
};

const Section = () => <p>Section</p>;
const Certificates = () => <p>Certificates</p>;

const ResumenContent = ({
  __component,
  ...rest
}: {
  __component: RESUMEN_TYPE;
} & any) => {
  console.log(__component);
  switch (__component) {
    case RESUMEN_TYPE.SECTION: {
      return <ResumenSectionComponent {...rest} />;
    }

    case RESUMEN_TYPE.CERTIFICATES: {
      return <ResumenCertificatesComponent {...rest} />;
    }

    default:
      return <ResumenSectionComponent {...rest} />;
  }
};

const Resumen = ({ resumen }: Props) => {
  const { seo, avatar } = useContext(GlobalContext);

  const dynamics_components = useMemo(
    () => resumen.data.attributes.dynamics_components,
    []
  );

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div className="pb-32">
        <NavBar />
        <GridWrapper>
          <div className="col-span-16 lg:col-start-1 lg:col-end-11">
            <ResumenMain />
            <div className="flex flex-col relative">
              {dynamics_components.map((component, index) => (
                <div key={"section " + index}>
                  <h4
                    id={`resumen-` + (index + 1)}
                    className="text-2xl lg:text-3xl font-semibold border-b-2 mt-16 mb-6 w-40 border-b-primary-300 uppercase "
                  >
                    {component.title}
                  </h4>

                  <div className="flex flex-col space-y-10 relative vit">
                    <ResumenContent {...component}></ResumenContent>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:col-start-13 lg:col-span-6 lg:flex flex-col space-y-4 sticky top-32 h-[200px]">
            <ResumenNavigation
              sections={dynamics_components.map((component) => component.title)}
            />
          </div>
        </GridWrapper>
      </div>
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [resumen] = await Promise.all([
    fetchAPI(
      "/my-resumen",
      {
        populate: {
          dynamics_components: {
            populate: [
              "resumen_section_list",
              "resumen_section_list.image",
              "resumen_section_certificates_list",
            ],
          },
        },
      },
      {
        encodeValuesOnly: true,
      }
    ),
  ]);

  return {
    props: {
      resumen,
    },
    revalidate: 1,
  };
}

export default Resumen;

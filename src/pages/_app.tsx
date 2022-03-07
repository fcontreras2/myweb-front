import type { AppProps } from "next/app";
import { createContext } from "react";
import { fetchAPI } from "lib/api";
import "../styles/global.scss";
import { GlobalApp } from "interfaces/global";
import dayjs from "dayjs";

import "dayjs/locale/es";
dayjs.locale("es");

// Store Strapi Global object in context
export const GlobalContext = createContext({} as GlobalApp);

function MyApp({ Component, pageProps }: AppProps<GlobalApp>) {
  return (
    <GlobalContext.Provider value={pageProps}>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
}

MyApp.getInitialProps = async (ctx: any) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  // Fetch global site settings from Strapi
  const globalRes = await fetchAPI("/global", {
    populate: {
      navbar: {
        populate: "*",
      },
      avatar: {
        populate: "*",
      },
    },
  });
  // Pass the data to our page via props
  return { pageProps: { ...globalRes.data.attributes } };
};

export default MyApp;

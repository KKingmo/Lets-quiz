import { AppProps } from "../node_modules/next/app";
import { RecoilRoot } from "recoil";
import Layout from "../src/components/commons/layout";
import GlobalStyle from "../styles/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;

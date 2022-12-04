import Layout from "../components/Layout";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NextNProgress
        color="#AFE1AF"
        height={1}
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

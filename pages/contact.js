import Head from "next/head";
import Breadcrumb from "../components/share/Breadcrumb";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Breadcrumb name="Contact" />
      </main>
    </div>
  );
}
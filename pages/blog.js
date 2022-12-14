import Head from "next/head";
import Blogs from "../components/blogs/Blogs";
import Breadcrumb from "../components/share/Breadcrumb";

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Breadcrumb name="Blog" />
        <Blogs />
      </main>
    </div>
  );
}

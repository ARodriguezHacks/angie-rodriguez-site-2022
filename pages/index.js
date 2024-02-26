import Head from "next/head";
import Main from "../components/Main";
import Footer from "../components/Footer/Footer";
// import { getSortedPostsData } from '../lib/posts';

// export async function getStaticProps() {
//   const posts = getSortedPostsData();
//   return {
//     props: {
//       posts,
//     },
//   };
// }

export default function Home() {
  return (
    <>
      <Head>
        <title>Angie Rodriguez | Software Engineer</title>
        <meta
          name="description"
          content="Angie Rodriguez Software Engineer website"
        />
        <link rel="icon" href="/logo-favicon.ico" />
      </Head>
      <Main />
      <Footer />
    </>
  );
}

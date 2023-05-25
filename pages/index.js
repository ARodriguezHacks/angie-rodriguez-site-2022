import Head from "next/head";
import Image from "next/image";
import Main from "../components/Main";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.scss";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Angie Rodriguez | Software Engineer</title>
        <meta
          name="description"
          content="Angie Rodriguez Software Engineer website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
      <Footer />
    </>
  );
}

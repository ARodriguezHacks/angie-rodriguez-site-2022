import Head from "next/head";
// import Image from "next/image";
import Main from "../components/Main";
import Footer from "../components/Footer/Footer";
// import styles from "../styles/Home.module.scss";

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

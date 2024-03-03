import Head from "next/head";
import Main from "../components/Main";
// import Layout from '../components/Layout';

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
    </>
  );
}

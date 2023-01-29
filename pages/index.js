import Head from "next/head";
import Image from "next/image";
// import { lazy } from "react";
// import Link from "next/link";
import Main from "../components/Main";
// import Navigation from "../components/Navigation";
import styles from "../styles/Home.module.scss";

// const MainPreview = lazy(() => import("../components/Main"));

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Angie Rodriguez | Software Engineer</title>
        <meta
          name="description"
          content="Angie Rodriguez Software Engineer website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Navigation /> */}
      {/* <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/about">About Me</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/github">Github</Link>
        </nav>
      </header> */}
      {/* <MainPreview /> */}
      <Main />
      {/* <main className={styles.main}>
        <div className={styles.about}>
          <h2>Basic Facts</h2>
          <p>2018</p>
        </div>
        <div className={styles.skills}>
          <h2>Angie Rodriguez</h2>
          <p>Front End Software Engineer based around Portland, OR.</p>
        </div>
        <div>
          <h1>Angie Rodriguez</h1>
          <p>Front End Software Engineer based around Portland, OR.</p>
        </div>
      </main> */}

      <footer className={styles.footer}>
        <nav className={styles.nav}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </nav>
      </footer>
    </div>
  );
}

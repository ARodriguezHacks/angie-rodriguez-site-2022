/* eslint-disable react/no-unescaped-entities */
import styles from "../styles/Home.module.scss";
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/Date'

export default function Blog({ posts }) {
  return (
    <div className={ styles.container }>
      <section className={ styles.about }>
        <h1>My Blog</h1>
        <p>
          I've been a front end developer for over 3 years, professionally. I
          enjoy web development and am excited to keep learning more about
          software engineering.
        </p>
      </section>
      <ul>
        { posts.map((post) => (
          <li key={ post.id }><Link href={ `/blog/${post.id}` }>{ post.title }</Link><br />
            <small><Date dateString={ post.date } /></small></li>

        )) }
      </ul>
    </div>
  );
}
export async function getStaticProps() {
  const posts = getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
}
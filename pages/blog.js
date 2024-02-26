import styles from "../styles/Home.module.scss";
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import BlogDate from '../components/Date'
import PropTypes from "prop-types"

export async function getStaticProps() {
  const posts = getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
}

export default function Blog({ posts }) {
  // console.log(props)
  return (
    <div className={ styles.container }>
      <section className={ styles.about }>
        <h1>My Blog</h1>
        <p>
          I&apos;ve been a front end developer for over 3 years, professionally. I
          enjoy web development and am excited to keep learning more about
          software engineering.
        </p>
      </section>
      <ul>
        { posts.map((post) => (
          <li key={ post.id }><Link href={ `/blog/${post.id}` }>{ post.title }</Link><br />
            <small><BlogDate dateString={ post.date } /></small></li>
        )) }
      </ul>
    </div>
  );
}

Blog.propTypes = {
  posts: PropTypes.array
}
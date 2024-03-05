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
  return (
    <div className={ `sectionFlex sectionHeight sectionMargin` } id="blog">
      <section>
        <h2 className={ `headingOne` }>My Blog</h2>
        {/* <p>
          My musings.
        </p> */}
        <ul>
        { posts.map((post) => (
          <li key={ post.id }><Link href={ `/blog/${post.id}` }>{ post.title }</Link><br />
            <small><BlogDate dateString={ post.date } /></small></li>
        )) }
      </ul>
      </section>
    </div>
  );
}

Blog.propTypes = {
  posts: PropTypes.array
}
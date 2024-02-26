import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import BlogDate from '../../components/Date'
import PropTypes from "prop-types"

export default function Post({ postData }) {
  return (
    <div id="layout">
      <Head>
        <title>{ postData.title }</title>
      </Head>
      <div className="blog">
        <h1>{ postData.title }</h1>
        <br />
        <BlogDate dateString={ postData.date } />
        <br />
        <br />
        <div dangerouslySetInnerHTML={ { __html: postData.contentHtml } } className="blog-contents-container"/>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

Post.propTypes = {
  postData: PropTypes.object
}
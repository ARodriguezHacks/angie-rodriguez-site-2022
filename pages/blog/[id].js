import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/Date'

export default function Post({ postData }) {
  return (
    <div id="layout">
      <Head>
        <title>{postData.title}</title>
      </Head>

      <h1>{ postData.title }</h1>
      <br />
      <Date dateString={postData.date}/>
      <br />

      {/* { postData.date } */}
      <br />
      <div dangerouslySetInnerHTML={{__html:postData.contentHtml}}/>
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
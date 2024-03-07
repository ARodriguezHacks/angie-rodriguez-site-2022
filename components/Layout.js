import Head from 'next/head'
import BlogDate from './Date'

export default function Layout({ children, ...props }) {
  // console.log(props)
  return (
    <div>
      <Head>
        <title>{ props.meta.title }</title>
        <meta name="description" content={ props.meta.title } />
      </Head>
      <div className="blog">
        <h1>{ props.meta.title }</h1>
        <br />
        <BlogDate dateString={ props.meta.date } />
        <br />
        <br />
        <div className="blog-contents-container">{ children }</div>
      </div>
    </div>
  )
}
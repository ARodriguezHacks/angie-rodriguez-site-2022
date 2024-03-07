import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from "next/head";
import { Heading } from "../../components/mdx/Heading";
import Layout from "../../components/Layout";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function BlogPage({ data, content }) {
  return (
    <div>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div>
        <Layout
          meta={{
            author: data.author,
            title: data.title,
            slug: data.slug,
            date: data.date,
          }}
        >
          <ReactMarkdown
            //eslint-disable-next-line react/no-children-prop
            children={content}
            components={{
              h1: Heading.H1,
              h2: Heading.H2,
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    //eslint-disable-next-line react/no-children-prop
                    children={String(children).replace(/\n$/, "")}
                    style={atomDark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <div {...props}>{children}</div>
                );
              },
            }}
          />
        </Layout>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({params}) {
  // console.log(params)
  const {data, content} = await getPostData(params.slug)

  return {
    props: {
      data,
      content
    },
  };
}

// pages/blog/[id].js
import Link from "next/link";
import { client } from "../../libs/client";
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import Moment from 'react-moment'
import ReactMarkdown from 'react-markdown'
import styles from '../../styles/BlogId.module.scss';

export default function BlogId({ blog }) {

  const pagePath = `https://h3e.vercel.app/blog/${blog.id}`;

  return (
    <>
      <Seo
        pageTitle={blog.title}
        pageDescription={blog.description}
        pagePath={pagePath}
      />
      <main className={styles.main}>
        <article className={styles.article}>
          <div className={styles.date}>
            <Moment format="YYYY.MM.DD">{blog.publishedAt}</Moment>
          </div>
          <div className={styles.title}>
            <h1>{blog.title}</h1>
          </div>
          <ul className={styles.tag}>
            <li className={styles.tagItem}>{blog.category && `${blog.category.name}`}</li>
          </ul>
          <div className={styles.body}>
            <ReactMarkdown>
              {blog.body}
            </ReactMarkdown>
          </div>
          <Link href={`https://twitter.com/share?url=${pagePath}&text=${blog.title}`}>
            <a className={styles.share}><div className={styles.shareWrapper}><i className="im im-twitter"></i><span>Share</span></div></a>
          </Link>
        </article>
      </main>
    </>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};

BlogId.getLayout = function getLayout(page) {
  return (
    <>
      <Layout>
        {page}
      </Layout>
    </>
  )
}
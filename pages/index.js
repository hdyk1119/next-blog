// pages/index.js
import Link from "next/link";
import { client } from "../libs/client";
import Layout from '../components/Layout'

export default function Home({ blog }) {
  return (
    <main>
      <section>
        <ul>
          {blog.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents
    },
  };
};

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
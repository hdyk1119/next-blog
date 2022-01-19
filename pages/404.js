import Layout from '../components/Layout'

export default function Custom404() {
  return (
    <main className="main">
      <p>ページがありません。</p>
    </main>
  );
}

Custom404.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
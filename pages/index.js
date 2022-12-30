import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div >
      {/* Head component >> to provide dynamic page title */}
      <Head>
        <title>Home Page</title>
      </Head>
      <h1>Hello Next JS</h1>
      {/* link component >> to navigate from one page to another */}
      <Link href='blog'>Go to Blog</Link>
    </div>
  )
}

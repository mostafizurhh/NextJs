import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div >
      {/* Head component >> to provide dynamic page title */}
      <Head>
        <title>Home Page</title>
      </Head>
      <h1 className="mb-5">Hello Next JS</h1>
      {/* link component >> to navigate from one page to another */}
      <Link href='/blog'><button className="btn btn-success btn-sm">Go to Blog</button></Link>
      <Link href='/AllPosts'><button className="btn btn-success btn-sm ml-5">Go to Posts</button></Link>
      <div className="mt-10 ml-8">
        <Image src='/sm1.png' width={300} height={900} alt=''></Image>
      </div>
    </div>
  )
}

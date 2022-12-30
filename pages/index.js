import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";

export default function Home() {
  return (
    <div className="text-center" >
      {/* Head component >> to provide dynamic page title */}
      <Head>
        <title>Home Page</title>
      </Head>
      <Banner></Banner>
      <h1 className="my-5">Hello Next JS</h1>
      {/* link component >> to navigate from one page to another */}
      <Link href='/blog'><button className="btn btn-success btn-sm">Go to Blog</button></Link>
      <Link href='/AllPosts'><button className="btn btn-success btn-sm ml-5">Go to Posts</button></Link>
      <Link href='/Comments'><button className="btn btn-success btn-sm ml-5">Go to Comments</button></Link>
      <div className="flex justify-center items-center py-10">
        <Image src='/sm1.png' width={300} height={900} alt=''></Image>
      </div>
      <Footer></Footer>
    </div>
  )
}

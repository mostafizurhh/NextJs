import Link from "next/link";

export default function Home() {
  return (
    <div >
      <h1>Hello Next JS</h1>
      {/* link component >> to navigate from one page to another */}
      <Link href='blog'>Go to Blog</Link>
    </div>
  )
}

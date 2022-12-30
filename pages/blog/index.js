import Head from "next/head";
import Link from "next/link";

const blog = () => {
    return (
        <div>
            {/* Head component >> to provide dynamic page title */}
            <Head>
                <title>Blog Page</title>
            </Head>
            <h1>this is blog page</h1>
            {/* link component >> to navigate from one page to another */}
            <Link href='/'>Home</Link>
        </div>
    );
};

export default blog;
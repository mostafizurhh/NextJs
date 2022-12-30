import Head from "next/head";
import { useRouter } from "next/router";

const postId = ({ post }) => {
    //implement back to posts button
    const router = useRouter();
    const handleBack = () => { router.push('/post') }
    /////////////////////////////////////////


    return (
        <div className="p-5">
            <Head>
                <title>
                    {post?.title}
                </title>
            </Head>
            <div className="card bg-info text-info-content">
                <div className="card-body">
                    <h1><strong>PostId</strong>: {post?.id}</h1>
                    <h2 className="card-title capitalize">Title: {post?.title}</h2>
                    <p className="capitalize"><strong>Post</strong>: {post?.body}</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleBack} className="btn">Back to Posts</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


//call data API from other website
export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postId}`)
    const data = await res.json();

    return {
        props: {
            post: data
        }
    }
}

//load dynamic data based on ID
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')

    const posts = await res.json();

    const paths = posts.map(post => {
        return {
            params: {
                postId: `${post.id}`
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export default postId;
import Head from "next/head";
import Post from "../../Components/Post/Post";

const Posts = ({ posts }) => {
    return (
        <div className="ml-5">
            <Head>
                <title>Posts Page</title>
            </Head>
            <h2 className="text-2xl">Total loaded posts {posts.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 p-5">
                {
                    posts.map(post => <Post
                        key={post.id}
                        post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;

//call data API from other website
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=09')
    const data = await res.json();

    return {
        props: {
            posts: data
        }
    }
}
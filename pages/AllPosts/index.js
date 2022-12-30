import Head from "next/head";
import { useRouter } from "next/router";
import Posts from "../../Components/Posts/Posts";
import Post from "../../Components/Posts/Posts";

const AllPosts = ({ allPosts }) => {
    const router = useRouter()
    const handleBack = () => { router.push('/') }
    return (
        <div className="ml-5">
            <Head>
                <title>Posts Page</title>
            </Head>
            <div className="flex mt-5">
                <h2 className="text-2xl">Total loaded posts {allPosts.length}</h2>
                <button onClick={handleBack} className="btn btn-primary ml-5"> Back to Home</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                {
                    allPosts.map(posts => <Posts
                        key={posts.id}
                        posts={posts}></Posts>)
                }
            </div>
        </div>
    );
};

export default AllPosts;

//call data API from other website
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=09')
    const data = await res.json();

    return {
        props: {
            allPosts: data
        }
    }
}
import Head from "next/head";
import Link from "next/link";

const Comments = ({ comments }) => {
    return (
        <div className="p-5">
            <Head>
                <title>Comment Page</title>
            </Head>
            <Link href='/'>
                <button className="btn btn-sm btn-primary">Back to Home</button>
            </Link>
            {
                comments.map(comment => <h2 className=" py-5 text-2xl text-justify" key={comment.id}>{comment.body}</h2>)
            }
        </div>
    );
};

export default Comments;

export const getServerSideProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=20');
    const data = await res.json();

    return {
        props: {
            comments: data
        }
    }
}
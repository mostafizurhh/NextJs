import Link from "next/link";

const Posts = ({ posts }) => {
    return (
        <div className="card w-96 mt-10 bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title capitalize">{posts.title}</h2>
                <p>Click the see details button to see all details regarding the post.</p>
                <div className="card-actions justify-end">
                    {/* use dynamic route */}
                    <Link href={`/AllPosts/${posts?.id}`}>
                        <button className="btn btn-sm btn-info">See Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Posts;
import Link from "next/link";

const Post = ({ post }) => {
    return (
        <div className="card w-96 mt-10 bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title capitalize">{post.title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    {/* use dynamic route */}
                    <Link href={`/post/${post?.id}`}>
                        <button className="btn btn-sm btn-info">See Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Post;
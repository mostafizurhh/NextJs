import { useRouter } from "next/router";

//create dynamic pages/routes
const blogs = () => {
    const router = useRouter();
    const id = router.query.blogs;
    return (
        <div>
            <h2>this is page no {id} of blogs.</h2>
        </div>
    );
};

export default blogs;
import { useRouter } from "next/router";

//create dynamic pages/routes >> [page/route name].js
const blogs = () => {
    //to show dynamic page number on ui
    //const router = useRouter();
    //const id = router.query.blogs;
    return (
        <div>
            <h2>this is page no -- of blogs.</h2>
        </div>
    );
};

export default blogs;
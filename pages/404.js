import Image from "next/image";
import Link from "next/link";

const Error = () => {
    return (
        <div className="m-10 text-center">
            <Image src='/404.png' width={1204} height={50}>
            </Image>
            <Link href='/'>
                <button className=" btn btn-primary mt-5">Back to Home</button>
            </Link>
        </div>
    );
};

export default Error;
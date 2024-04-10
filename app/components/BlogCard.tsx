import { headers } from "next/headers";
import Card from "./Card";

type CardType = {
    [key: string]: JSX.Element[];
};

type ObjectId = any;

type BlogPost = {
    _id: ObjectId;
    title: string;
    content: string;
    slug: string;
    date: Date;
    __v: number;
    author?: ObjectId;
    category?: string;
    featuredImage?: string;
}

const BlogCard = (blogs: any, categories: any) => {
    const headerList = headers();
     const domain = headerList.get("x-forwarded-host") || headerList.get("host") || "localhost:3000";
    return (
        <>
            <div>
                {/* give a header category and show the available categories*/ }
                <h1 className="text-3xl font-bold text-center">Category</h1>
                <h1>{ categories }</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                { blogs.blogs.map((blog: BlogPost) => {
                    return (
                        <Card
                            key={ blog._id }
                            imageUrl={`${blog.featuredImage}`}
                            title={ blog.title }
                            description={ blog.content }
                        />
                    )
                }) }
            </div>
        </>
    )
}
export default BlogCard;
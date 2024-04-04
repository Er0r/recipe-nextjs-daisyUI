import { getAllBlogs } from '@/db/queries';
import BlogCard from '../components/BlogCard';


const Blog = async () => {
    const blogs = await getAllBlogs();
    console.log(blogs); 
    return (
        <div>
            <BlogCard blogs = {blogs as any} />
        </div>
    )
}

export default Blog;
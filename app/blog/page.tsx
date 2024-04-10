import { getAllBlogs, getAllCategories } from '@/db/queries';
import BlogCard from '../components/BlogCard';


const Blog = async () => {
    const blogs = await getAllBlogs();
    const categories = await getAllCategories();

    return (
        <div>
            <BlogCard blogs = {blogs as any}  categories = {categories as any} />
        </div>
    )
}

export default Blog;
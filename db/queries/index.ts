import { blogModel } from "@/models/blog-model";
import { categoryModel } from "@/models/category-model";

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


async function getAllBlogs(): Promise<BlogPost> {
    return await blogModel.find().lean();
}

async function getAllCategories(): Promise<string[]> {
    return await categoryModel.find().lean();
}

export { getAllBlogs, getAllCategories };
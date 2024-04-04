'use client';
import React, { useState } from 'react';
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

const BlogCard = (blogs: any) => {

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {blogs.blogs.map((blog: BlogPost) => {
                    return (
                        <Card
                            key={blog._id}
                            imageUrl={blog.featuredImage}
                            title={blog.title}
                            description={blog.content}
                        />
                    )
                })}
            </div>
        </>
    )
}
export default BlogCard;
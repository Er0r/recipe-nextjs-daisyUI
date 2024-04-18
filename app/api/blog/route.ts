import { NextRequest, NextResponse } from 'next/server';
import { Types } from 'mongoose';
import { blogModel } from '@/models/blog-model';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const title = formData.get('title')?.toString() || '';
    const content = formData.get('content')?.toString() || '';
    const author = new Types.ObjectId('6607984e6c4d2f3966923221'); 
    const slug = title.toLowerCase().replace(/\s+/g, '-');
    const category = formData.get('category')?.toString() || '';
    const featuredImage = formData.get('featuredImage');
    const date = new Date().toISOString();

    console.log(featuredImage);

    const blog = new blogModel({
      title,
      content,
      author,
      slug,
      category,
      featuredImage,
      date,
    });

    await blog.save();
    return new NextResponse(JSON.stringify({ message: 'Blog submitted successfully' }));
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ message: error.message }));
  }
}
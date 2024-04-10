import { NextRequest, NextResponse } from 'next/server';
import { Types } from 'mongoose';
import { blogModel } from '@/models/blog-model';
import { put } from '@vercel/blob';
import path from 'path';
import fs from 'fs/promises';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const title = formData.get('title')?.toString() || '';
    const content = formData.get('content')?.toString() || '';
    const author = new Types.ObjectId('6607984e6c4d2f3966923221'); 
    const slug = title.toLowerCase().replace(/\s+/g, '-');
    const category = formData.get('category')?.toString() || '';
    const fileUpload = formData.get('featuredImage');
    const date = new Date().toISOString();

    let featuredImage = '';

    if (fileUpload) {
      const uploadedFile = fileUpload as File;
      const fileName = `${Date.now()}-${uploadedFile.name}`;
      // const filePath = path.join(process.cwd(), 'tmp', fileName);
      // const data = await uploadedFile.arrayBuffer();
      // await fs.writeFile(filePath, Buffer.from(data));
      // featuredImage = `/tmp/${fileName}`;
      const blob = await put(fileName, uploadedFile, {
          access: 'public',
      });
      featuredImage = blob.url;
  
    }

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
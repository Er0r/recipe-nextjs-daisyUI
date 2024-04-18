'use client';
import { FormEvent } from 'react'
import { put } from '@vercel/blob';
import React, { useState } from 'react';

const Form = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [featuredImage, setFeaturedImage] = useState<string | null>(null);
  const [category, setCategory] = useState('Blog');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastColor, setToastColor] = useState<string | null>(null);

  const storeFile = async (file: File) => {
    const fileName = `${Date.now()}-${file.name}`;
    const blob = await put(fileName, file, {
      access: 'public',
      token: 'vercel_blob_rw_Qn5nYsJlck7OvlLu_MMCk2ixw3xWEtaINgxCD0LzvAa81r8',
    });
    console.log(blob.url);
    return blob.url;
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      formData.append('featuredImage', featuredImage || '');
      
      const response = await fetch('/api/blog', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json()
      setToastMessage(data.message);
      setTimeout(() => setToastMessage(null), 3000);
      setToastColor('green');
    } catch (error) {
      setToastMessage('Error submitting Blog. Please try again.');
      setTimeout(() => setToastMessage(null), 3000);
      setToastColor('red');
    }
  };

  return (
    <form onSubmit={ handleSubmit }>
      <div className="flex flex-col min-h-screen justify-center gap-9 bg-white px-9">
        <div className="flex justify-center items-center flex-col gap-3">
          <h2 className="text-2xl font-bold">Title</h2>
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="input input-bordered input-accent w-full max-w-xs"
            value={ title }
            onChange={ (e) => setTitle(e.target.value) }
          />
        </div>
        <div className="flex justify-center items-center flex-col gap-3">
          <h2 className="text-2xl font-bold">Content</h2>
          <textarea
            name="content"
            className="textarea textarea-outline textarea-accent"
            placeholder="Your content here..."
            value={ content }
            onChange={ (e) => setContent(e.target.value) }
          ></textarea>
        </div>
        <div className="flex items-center flex-col gap-3">
          <h2 className="text-2xl font-bold">Featured Image(PNG/JPG/JPEG)</h2>
          <input
            name="featuredImage"
            type="file"
            className="file-input file-input-bordered file-input-accent w-full max-w-xs"
            onChange={ async (e) => {
              if (e.target.files && e.target.files.length > 0) {
                const file = e.target.files[0];
                const url = await storeFile(file);
                setFeaturedImage(url);
              }
            } }
          />
        </div>
        <div className="flex justify-center items-center flex-col gap-3">
          <h2 className="text-2xl font-bold">Select Category:</h2>
          <select
            name="category"
            className="input input-bordered input-accent w-full max-w-xs"
            value={ category }
            onChange={ (e) => setCategory(e.target.value) }
          >
            <option value="Blog">Blog</option>
            <option value="Recipe">Recipe</option>
            <option value="Food Item">Food Item</option>
          </select>
        </div>
        <div className="flex items-center flex-col gap-2">
          <button className="btn btn-fill btn-accent p-4 m-4" type='submit'>
            Submit
          </button>
        </div>
        { toastMessage && (
          <div className="toast toast-end">
            { toastColor === 'red' ? (
              <div className="alert alert-error">
                { toastMessage }
              </div>
            ) : null }
            { toastColor === 'green' ? (
              <div className="alert alert-success">
                { toastMessage }
              </div>
            ) : null }
          </div>
        ) }
      </div>
    </form>
  );
};

export default Form;
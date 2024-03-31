'use client';
import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [featuredImage, setFeaturedImage] = useState<File | null>(null);
    const [category, setCategory] = useState('Blog');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Create a FormData object to send the data to the API
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        if (featuredImage) {
            formData.append('featuredImage', featuredImage);
        }
        formData.append('category', category);
        const formDataEntries = Array.from(formData.entries());
        console.log('Form Data:', formDataEntries);
        // try {
        //     // Replace 'YOUR_API_URL' with the actual API endpoint URL
        //     const response = await axios.post('YOUR_API_URL', formData, {
        //         headers: {
        //             'Content-Type': 'multipart/form-data',
        //         },
        //     });

        //     console.log(response.data); // Log the response from the API
        //     // You can perform additional actions after successful submission
        // } catch (error) {
        //     console.error('Error submitting form:', error);
        //     // Handle error scenarios
        // }
    };

    return (
        <form onSubmit={ handleSubmit }>
            <div className="flex flex-col min-h-screen justify-center gap-9 bg-white px-9">
                <div className="flex justify-center items-center flex-col gap-3">
                    <h2 className="text-2xl font-bold">Title</h2>
                    <input
                        type="text"
                        placeholder="Title"
                        className="input input-bordered input-accent w-full max-w-xs"
                        value={ title }
                        onChange={ (e) => setTitle(e.target.value) }
                    />
                </div>
                <div className="flex justify-center items-center flex-col gap-3">
                    <h2 className="text-2xl font-bold">Content</h2>
                    <textarea
                        className="textarea textarea-outline textarea-accent"
                        placeholder="Your content here..."
                        value={ content }
                        onChange={ (e) => setContent(e.target.value) }
                    ></textarea>
                </div>
                <div className="flex items-center flex-col gap-3">
                    <h2 className="text-2xl font-bold">Featured Image(PNG/JPG/JPEG)</h2>
                    <input
                        type="file"
                        className="file-input file-input-bordered file-input-accent w-full max-w-xs"
                        onChange={ (e) => setFeaturedImage(e.target.files ? e.target.files[0] : null) }
                    />
                </div>
                <div className="flex items-center flex-col gap-3">
                    <h2 className="text-2xl font-bold">Select Category:</h2>
                    <select
                        className="select select-accent w-full max-w-xs"
                        value={ category }
                        onChange={ (e) => setCategory(e.target.value) }
                    >
                        <option value="Blog">Blog</option>
                        <option value="Recipe">Recipe</option>
                        <option value="Food Item">Food Item</option>
                    </select>
                </div>
                <div className="flex items-center flex-col gap-2">
                    <button
                        className="btn btn-fill btn-accent p-4 m-4" type='submit'
                    >
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Form;
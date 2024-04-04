'use client';
import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [featuredImage, setFeaturedImage] = useState<File | null>(null);
    const [category, setCategory] = useState('Blog');
    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const [toastColor, setToastColor] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        if (featuredImage) {
            formData.append('featuredImage', featuredImage);
        }
        formData.append('category', category);
        formData.append('author', '6607984e6c4d2f3966923221');
        formData.append('date', new Date().toISOString());
        formData.append('slug', title.toLowerCase().replace(/\s/g, '-'));

        const formDataEntries = Array.from(formData.entries());
        console.log('Form Data:', formDataEntries);
        try {
            const response = await axios.post('http://localhost:3001/api/v1/blog', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            
            if (!response) {
                setToastMessage('Technical Problem. Please try again.');
                setTimeout(() => setToastMessage(null), 3000);
                setToastColor('red');
            } else if (response.status !== 201) {
                setToastMessage('Technical Problem. Please try again.');
                setTimeout(() => setToastMessage(null), 3000);
                setToastColor('red');
            } else {
                setToastMessage('Blog Published Successfully.');
                setTimeout(() => setToastMessage(null), 3000);
                setToastColor('green');
            }

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
                { toastMessage && (<div className="toast toast-end">
                    { toastColor === 'red' ? ( <div className="alert alert-error"> { toastMessage } </div> ) : null }
                    { toastColor === 'green' ? ( <div className="alert alert-success"> { toastMessage } </div> ) : null }
                </div>) }
            </div>

        </form>
    );
};

export default Form;
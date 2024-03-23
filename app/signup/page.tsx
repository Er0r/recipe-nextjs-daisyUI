'use client';
import { useState } from "react";

const Signup = () => {
    const [isRegistered, setIsRegistered] = useState(false);
    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <div className="bg-white rounded shadow-lg p-8 m-4 max-w-xs max-h-full">
                { isRegistered ? (
                    <div>
                        <h1 className="text-2xl mb-4">Sign In</h1>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                            </div>
                            <div className="flex justify-center">
                                <button className="btn btn-outline btn-accent p-2 m-2" type="button">
                                    Sign In
                                </button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div>
                        <h1 className="text-2xl mb-4">Sign Up</h1>
                        <form className="m-2">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">
                                    Date of Birth
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dob" type="date" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                                    Phone
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder="Phone" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                            </div>
                            <div className="flex justify-center">
                                <button className="btn btn-outline btn-accent p-2 m-2" type="button">
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                ) }
                <button className="btn btn-outline btn-accent p-2 m-2 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-2" type="button" onClick={ () => setIsRegistered(!isRegistered) }>
                    { isRegistered ? 'Want To Open An Account?' : 'Already Have An Account?' }
                </button>
            </div>
        </div>
    );
}

export default Signup;
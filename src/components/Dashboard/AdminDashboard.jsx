import React from 'react'
import Header from '../others/Header'

const AdminDashboard = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8">
            <Header />

            {/* Title Section */}
            <div className="text-center mt-10">
                <h1 className="text-5xl font-extrabold tracking-wide">
                    Admin Panel
                </h1>
                <p className="mt-3 text-gray-400 text-lg">
                    Create & Manage Tasks Easily
                </p>
            </div>

            {/* Create Task Card */}
            <div className="max-w-3xl mx-auto mt-12 bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/20">

                <h2 className="text-3xl font-bold mb-6 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                    </svg>

                    Create Task
                </h2>

                <form className="space-y-6">

                    {/* Task Title */}
                    <div>
                        <label className="block mb-2 text-sm text-gray-300">
                            Task Title
                        </label>
                        <input
                            type="text"
                            placeholder="Enter task title"
                            className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block mb-2 text-sm text-gray-300">
                            Description
                        </label>
                        <textarea
                            rows="4"
                            placeholder="Enter task description"
                            className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        ></textarea>
                    </div>

                    {/* Date & Category */}
                    <div className="grid md:grid-cols-2 gap-6">

                        <div>
                            <label className="block mb-2 text-sm text-gray-300">
                                Due Date
                            </label>
                            <input
                                type="date"
                                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm text-gray-300">
                                Category
                            </label>
                            <select
                                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                <option value="">Select Category</option>
                                <option>Design</option>
                                <option>Development</option>
                                <option>Testing</option>
                                <option>Bug Fix</option>
                                <option>Research</option>
                                <option>Marketing</option>
                                <option>Documentation</option>
                                <option>Deployment</option>
                            </select>
                        </div>

                    </div>

                    {/* Assign To */}
                    <div>
                        <label className="block mb-2 text-sm text-gray-300">
                            Assign To
                        </label>
                        <input
                            type="text"
                            placeholder="Enter employee name"
                            className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition duration-300 font-semibold text-lg"
                    >
                        Create Task
                    </button>

                </form>
            </div>
        </div>








    )

}

export default AdminDashboard
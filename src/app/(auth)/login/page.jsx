'use client'

import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log("Error", errors);

    const handleLoginFunc = (data) => {
        // e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        console.log("Email and password", data);
    }

    return (
        <div className="container mx-auto py-12">

            <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-md p-10">

                {/* Title */}
                <h2 className="text-4xl font-bold text-center text-[#403F3F] mb-10">
                    Login your account
                </h2>

                <div className="border-t border-gray-200 pt-10">

                    <form className="space-y-6" onSubmit={handleSubmit(handleLoginFunc)}>

                        {/* Email */}
                        <div>
                            <label className="block text-xl font-semibold text-[#403F3F] mb-3">
                                Email address
                            </label>

                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email address"
                                {...register(
                                    "email",
                                    { required: "Email Required" }
                                )}
                                className="w-full bg-[#F3F3F3] px-5 py-4 rounded-md outline-none text-base"
                            />
                            {errors.email && <p>{errors.email.message}</p>}
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-xl font-semibold text-[#403F3F] mb-3">
                                Password
                            </label>

                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                {...register(
                                    "password",
                                    { required: "Password Required" }
                                )}
                                className="w-full bg-[#F3F3F3] px-5 py-4 rounded-md outline-none text-base"
                            />
                            {errors.password && <p>{errors.password.message}</p>}
                        </div>

                        {/* Button */}
                        <button className="w-full bg-[#403F3F] hover:bg-black transition text-white text-xl font-semibold py-4 rounded-md">
                            Login
                        </button>
                    </form>

                    {/* Footer */}
                    <p className="text-center text-lg font-medium text-[#706F6F] mt-8">
                        Don&apos;t Have An Account ?{" "}
                        <Link
                            href="/register"
                            className="text-[#FF8C47]"
                        >
                            Register
                        </Link>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default LoginPage;
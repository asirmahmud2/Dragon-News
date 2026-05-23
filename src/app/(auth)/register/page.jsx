'use client'

import { authClient } from '@/lib/auth-client';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    console.log("Errors", errors);

    const handleRegisterFunc = async (data) => {
        // console.log("Register Data", data);
        const { name, email, photo, password} = data;

        // console.log(name, email, photo, password);

        const { data:res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/",
        })
        console.log(res,error);
        if(error)
        {
            alert(error.message)
        }
        if(res)
        {
            alert("SignUP Successful")
        }
    }

    return (
        <div className="container mx-auto py-12">

            <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-md p-10">

                {/* Title */}
                <h2 className="text-4xl font-bold text-center text-[#403F3F] mb-10">
                    Register your account
                </h2>

                <div className="border-t border-gray-200 pt-10">

                    <form
                        className="space-y-6"
                        onSubmit={handleSubmit(handleRegisterFunc)}
                    >

                        {/* Name */}
                        <div>
                            <label className="block text-xl font-semibold text-[#403F3F] mb-3">
                                Your Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                {...register(
                                    "name",
                                    {
                                        required: "Name Required"
                                    }
                                )}
                                className="w-full bg-[#F3F3F3] px-5 py-4 rounded-md outline-none text-base"
                            />

                            {
                                errors.name &&
                                <p className="text-red-500 mt-2">
                                    {errors.name.message}
                                </p>
                            }
                        </div>

                        {/* Photo URL */}
                        <div>
                            <label className="block text-xl font-semibold text-[#403F3F] mb-3">
                                Photo URL
                            </label>

                            <input
                                type="text"
                                name="photo"
                                placeholder="Enter photo URL"
                                {...register(
                                    "photo",
                                    {
                                        required: "Photo URL Required"
                                    }
                                )}
                                className="w-full bg-[#F3F3F3] px-5 py-4 rounded-md outline-none text-base"
                            />

                            {
                                errors.photo &&
                                <p className="text-red-500 mt-2">
                                    {errors.photo.message}
                                </p>
                            }
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-xl font-semibold text-[#403F3F] mb-3">
                                Email
                            </label>

                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email address"
                                {...register(
                                    "email",
                                    {
                                        required: "Email Required"
                                    }
                                )}
                                className="w-full bg-[#F3F3F3] px-5 py-4 rounded-md outline-none text-base"
                            />

                            {
                                errors.email &&
                                <p className="text-red-500 mt-2">
                                    {errors.email.message}
                                </p>
                            }
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
                                    {
                                        required: "Password Required",
                                        minLength: {
                                            value: 6,
                                            message: "Password must be at least 6 characters"
                                        }
                                    }
                                )}
                                className="w-full bg-[#F3F3F3] px-5 py-4 rounded-md outline-none text-base"
                            />

                            {
                                errors.password &&
                                <p className="text-red-500 mt-2">
                                    {errors.password.message}
                                </p>
                            }
                        </div>

                        {/* Checkbox */}
                        <div className="flex items-center gap-3">

                            <input
                                type="checkbox"
                                {...register(
                                    "terms",
                                    {
                                        required: "Please accept terms and conditions"
                                    }
                                )}
                                className="checkbox checkbox-sm rounded-sm"
                            />

                            <p className="text-lg text-[#706F6F]">
                                Accept{" "}
                                <span className="font-semibold">
                                    Term & Conditions
                                </span>
                            </p>
                        </div>

                        {
                            errors.terms &&
                            <p className="text-red-500">
                                {errors.terms.message}
                            </p>
                        }

                        {/* Button */}
                        <button className="w-full bg-[#403F3F] hover:bg-black transition text-white text-xl font-semibold py-4 rounded-md">
                            Register
                        </button>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
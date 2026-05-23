"use client"

import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { authClient } from '@/lib/auth-client';

const RightSideBar = () => {

    const handleGoogleSignin = async() => {
        const data = await authClient.signIn.social({
            provider: "google",
        });

        console.log("Information", data);
    }
    const handleGithubSignin = async() => {
        const data = await authClient.signIn.social({
            provider: "github",
        });

        console.log("Information", data);
    }

    return (
        <div className="space-y-4">

            {/* Title */}
            <h2 className="text-xl font-bold p-2 text-[#403F3F] mb-4">
                Login With
            </h2>

            {/* Google Button */}
            <button className="btn w-full bg-white border border-blue-500 hover:bg-blue-50 text-[#403F3F] text-lg font-medium"
                onClick={handleGoogleSignin}
            >
                <FcGoogle className="text-2xl" />
                Login with Google
            </button>

            {/* Github Button */}
            <button className="btn w-full bg-white border border-[#403F3F] hover:bg-gray-100 text-[#403F3F] text-lg font-medium"
                onClick={handleGithubSignin}
            >
                <FaGithub className="text-2xl" />
                Login with Github
            </button>

        </div>
    );
};

export default RightSideBar;
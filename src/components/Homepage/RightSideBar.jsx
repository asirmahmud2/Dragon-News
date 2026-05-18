import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const RightSideBar = () => {
    return (
        <div className="space-y-4">

            {/* Title */}
            <h2 className="text-xl font-bold p-2 text-[#403F3F] mb-4">
                Login With
            </h2>

            {/* Google Button */}
            <button className="btn w-full bg-white border border-blue-500 hover:bg-blue-50 text-[#403F3F] text-lg font-medium">
                <FcGoogle className="text-2xl" />
                Login with Google
            </button>

            {/* Github Button */}
            <button className="btn w-full bg-white border border-[#403F3F] hover:bg-gray-100 text-[#403F3F] text-lg font-medium">
                <FaGithub className="text-2xl" />
                Login with Github
            </button>
            
        </div>
    );
};

export default RightSideBar;
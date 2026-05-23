'use client'

import Link from "next/link";
import userIcon from "@/assets/user.png"
import Image from "next/image";
import Navlink from "./Navlink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {

    const { data: session } = authClient.useSession()
    const user = session?.user;
    console.log(user, "session");

    return (
        <div className="container mx-auto bg-[#f3f3f3] py-6 mt-6 rounded-xl">
            <div className="max-w-7xl mx-auto flex items-center justify-center relative">

                <div className="flex items-center gap-5 text-[17px] text-gray-500">
                    <Navlink
                        href="/"
                        className="hover:text-pink-600 transition"
                    >
                        Home
                    </Navlink>

                    <Navlink
                        href="/about-us"
                        className="hover:text-pink-600 transition"
                    >
                        About
                    </Navlink>

                    <Navlink
                        href="/career"
                        className="hover:text-pink-600 transition"
                    >
                        Career
                    </Navlink>
                </div>

                {/* Right Login */}
                <div className="absolute right-0 flex items-center gap-4 p-5">
                    {
                        user ? (<h2>Hello, {user.name}</h2>) : (<span></span>)
                    }
                    <Image alt="User Icon" className="rounded-full" src={userIcon} width={50} height={50}></Image>

                    {
                        user ? (<button className="btn btn-warning hover:bg-black transition"
                        onClick={async()=>await authClient.signOut()}
                        >
                            <Link href="/login">LogOut</Link>
                        </button>)
                            : (<button className="btn btn-primary hover:bg-black transition">
                                <Link href="/login">Login</Link>
                            </button>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
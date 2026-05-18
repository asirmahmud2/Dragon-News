import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';

const NewsCards = ({ news }) => {
    return (
        <div>
            <h2 className="text-xl font-bold p-2 text-[#403F3F] mb-4">
                All News
            </h2>

            {
                news.map((n) => (

                    <Link key={n._id} href={`/news/${n._id}`}>

                        <div
                            className="border border-gray-200 rounded-lg overflow-hidden bg-white mb-5 cursor-pointer"
                        >

                            {/* Top Author Section */}
                            <div className="flex items-center justify-between bg-[#F3F3F3] p-5">

                                <div className="flex items-center gap-4">
                                    <img
                                        src={n.author.img}
                                        alt="author"
                                        className="w-12 h-12 rounded-full object-cover"
                                    />

                                    <div>
                                        <h2 className="text-xl font-bold text-[#403F3F]">
                                            {n.author.name}
                                        </h2>

                                        <p className="text-lg text-[#706F6F]">
                                            {n.author.published_date?.split(" ")[0]}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 text-2xl text-[#706F6F]">
                                    <CiShare2 />
                                    <CiBookmark />
                                </div>
                            </div>

                            {/* News Body */}
                            <div className="p-5">

                                <h2 className="text-4xl leading-tight font-bold text-[#403F3F] mb-6">
                                    {n.title}
                                </h2>

                                <img
                                    src={n.image_url}
                                    alt="news"
                                    className="w-full h-[350px] object-cover rounded-lg mb-6"
                                />

                                <p className="text-xl leading-10 text-[#706F6F]">
                                    {n.details.slice(0, 250)}...

                                    <span className="text-[#FF8C47] font-semibold ml-2">
                                        Read More
                                    </span>
                                </p>

                                <div className="border-t border-gray-200 mt-8 pt-6 flex items-center justify-between">

                                    <div className="flex items-center gap-3">
                                        <div className="flex text-[#FF8C47] text-2xl">
                                            ★ ★ ★ ★ ★
                                        </div>

                                        <p className="text-2xl font-medium text-[#706F6F]">
                                            {n.rating.number}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-2 text-[#706F6F]">
                                        <span className="text-2xl">👁</span>

                                        <p className="text-2xl font-medium">
                                            {n.total_view}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
};

export default NewsCards;
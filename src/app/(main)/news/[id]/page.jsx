import { getNewsDetailsID } from '@/lib/dataFetch';
import Link from 'next/link';
import React from 'react';

const DetailsPage = async ({ params }) => {

    const { id } = await params;

    const news = await getNewsDetailsID(id);

    return (
        <div className="container mx-auto mt-15">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h2 className="text-xl font-bold p-2 text-[#403F3F] mb-4">
                    News Details
                </h2>

                {/* News Image */}
                <img
                    src={news.image_url}
                    alt="news"
                    className="w-full rounded-lg object-cover mb-8"
                />

                {/* Title */}
                <h2 className="text-4xl font-bold leading-tight text-[#403F3F] mb-5">
                    {news.title}
                </h2>

                {/* Details */}
                <p className="text-[#706F6F] text-lg leading-9 mb-8">
                    {news.details}
                </p>

                {/* Button */}
                <Link href={`/category/${news.category_id}`}>
                    <button className="btn bg-pink-600 hover:bg-pink-700 text-white border-none rounded-none px-6">
                        ← All news in this category
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default DetailsPage;
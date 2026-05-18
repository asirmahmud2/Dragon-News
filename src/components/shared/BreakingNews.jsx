import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
    {
        id: 1,
        title: "Match Highlights: Germany vs Spain — as it happened",
    },
    {
        id: 2,
        title: "Bangladesh wins thrilling last-over match against Sri Lanka",
    },
    {
        id: 3,
        title: "New AI model can generate cinematic videos from prompts",
    },
    {
        id: 4,
        title: "Champions League final tickets sold out in minutes",
    },
];

const BreakingNews = () => {
    return (
        <div className="container mx-auto overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="flex items-center">

                {/* Left Badge */}
                <div className="flex items-center gap-2 bg-pink-600 px-5 py-4 text-white font-bold text-lg min-w-fit">
                    Latest
                </div>

                {/* Marquee */}
                <div className="flex-1 bg-gray-100 py-4">
                    <Marquee
                        pauseOnHover
                        speed={60}
                        gradient={false}
                    >
                        {
                            news.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center"
                                >
                                    <p className="mx-8 cursor-pointer font-semibold text-gray-800 hover:text-pink-600 transition">
                                        {item.title}
                                    </p>

                                    <span className="text-pink-500 text-xl">
                                        •
                                    </span>
                                </div>
                            ))
                        }
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default BreakingNews;
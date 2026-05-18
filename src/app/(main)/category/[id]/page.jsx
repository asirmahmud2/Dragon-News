import LeftSidebar from '@/components/Homepage/LeftSidebar';
import NewsCards from '@/components/Homepage/NewsCards';
import RightSideBar from '@/components/Homepage/RightSideBar';
import { getCategories, getNewsOfCategories } from '@/lib/dataFetch';
import React from 'react';


const NewsByCategory = async ({ params }) => {
    const { id } = await params;
    console.log("Response", id);
    const categories = await getCategories();
    const news = await getNewsOfCategories(id);
    return (
        <div className="container mx-auto grid grid-cols-4 gap-5 mt-15">
            <div className="col-span-1 p-5">
                <LeftSidebar categories={categories} activeID={id}></LeftSidebar>
            </div>

            <div className="col-span-2 space-y-6">
                <NewsCards news={news}></NewsCards>
            </div>

            <div className="col-span-1 p-5">
                <RightSideBar></RightSideBar>
            </div>
        </div>
    );
};

export default NewsByCategory;
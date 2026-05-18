import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({categories, activeID}) => {
    return (
        <div>
            <h2 className="text-xl font-bold p-2 text-[#403F3F] mb-4">
          All Category
        </h2>
        <ul className="space-y-2">
          {
            categories.map((category) => (
                <li key={category.category_id}
                    className={`text-center py-2 rounded-md cursor-pointer
                        text-lg font-medium ${activeID===category.category_id?"text-[#E7E7E7] bg-[#403F3F]":"text-[#9F9F9F]"}  hover:bg-[#E7E7E7] hover:text-[#403F3F]`}>
                        <Link className='block' 
                        href={`/category/${category.category_id}`}>{category.category_name}</Link>
                </li>))
          }
        </ul>
        </div>
    );
};

export default LeftSidebar;
import React, { useEffect, useState } from 'react'
import { getCategories } from '../../services/CategoryService';
export default function CategoryFilter() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const data = await getCategories();
            setCategories(data);
            // console.log(data);
        };
        fetchCategories();
    }, []);
    return (
        <div className="bg-white border-y border-gray-200">
            <div className="max-w-[1200px] mx-auto px-4 py-4">
                <div className="flex flex-wrap md:flex-nowrap items-center gap-3 overflow-x-auto scrollbar-hide">
                    <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                        Chọn theo nhu cầu:
                    </span>
                    <div className="flex flex-wrap gap-3">
                        {categories.map((category) => (
                            <button
                                key={category.categoryId}

                                className={`flex flex-col items-center justify-center w-24 h-24 rounded-xl border-2 transition-all duration-200  `}
                            >
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="w-10 h-10 object-contain mb-1"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

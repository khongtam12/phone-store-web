import React, { useEffect, useState } from 'react'
import { getBrands } from '../../services/BrandService'
export default function BrandFilter() {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        const fetchBrands = async () => {
            const data = await getBrands();
            setBrands(data);
            // console.log(data);
        };
        fetchBrands();
    }, []);
    return (
        <div className="bg-white border-y border-gray-200">
            <div className="max-w-[1200px] mx-auto px-4 py-4">
                <div className="flex flex-wrap md:flex-nowrap items-center gap-3 overflow-x-auto scrollbar-hide">
                    <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                        Hãng:
                    </span>
                    <div className="flex flex-wrap gap-3">
                        {brands.map((brand) => (
                            <button
                                key={brand.brandId}

                                className={`flex items-center justify-center w-20 h-12 rounded-lg border-2 transition `}
                            >
                                <img
                                    src={brand.logo}
                                    alt={brand.title}
                                    className="w-full h-full object-contain"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

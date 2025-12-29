// src/components/home/sections/ProductListSection.jsx

import React from 'react';
import ProductListBanners from './ProductListBanners';
import BannerAside1 from "@/assets/home/aside/01K6F050R8WY7PZK75J36ST4CV.aside.png";
import BannerAside2 from "@/assets/home/aside/01K7EHA6JK5P0M1X61ENXTE983.aside.png";
import CategorySlider from './CategorySlider';
import BrandSlider from './BrandSlider';
import ProductSlider from './ProductSlider';

// Dữ liệu mẫu cho các banner
const bannerData = [
    {
        id: 1,
        href: "/iphone-17-pro-max.html",
        src: BannerAside1,
        alt: "Banner iphone 17 pro home desktop"
    },
    {
        id: 2,
        href: "/dien-thoai-xiaomi-15t-5g.html",
        src: BannerAside2,
        alt: "Banner Xiaomi 15T home desktop"
    }
];
const ProductListSection = ({ products, categories, brands }) => {
    return (
        <section className="mt-6">
            <h2 className="text-2xl font-bold mb-4">DANH MỤC NỔI BẬT</h2>
            <div className="flex flex-col md:flex-row gap-6">
                {/* Tăng width cho banner container */}
                <div className="w-full md:w-1/4 lg:w-1/5">
                    <ProductListBanners banners={bannerData} />
                </div>
                <div className="w-full md:w-3/4 lg:w-4/5">
                    <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                        <CategorySlider categories={categories} />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                        <BrandSlider brands={brands} />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <ProductSlider products={products} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductListSection;
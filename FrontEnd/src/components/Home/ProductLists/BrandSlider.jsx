// src/components/home/ui/BrandSlider.jsx

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

// Icon cho nút điều hướng
import ChevronIcon from 'components/ui/ChevronIcon';
const BrandSlider = ({ brands }) => {
    if (!brands || brands.length === 0) {
        return null;
    }
    // 1. Bỏ .slice(0, 10) và lặp trực tiếp qua `brands` prop
    return (
        <div className="relative">
            <Swiper
                modules={[Navigation]}
                slidesPerView={'auto'}
                spaceBetween={10}
                navigation={{
                    nextEl: '.brand-swiper-button-next',
                    prevEl: '.brand-swiper-button-prev',
                }}
                loop={false}
                className="!p-1"
            >
                {/* Lặp trực tiếp qua mảng brands */}
                {brands.map((brand) => (
                    <SwiperSlide key={brand.brandId} className="!h-auto !w-auto">
                        {/* 2. Thay thế thẻ <img> bằng tên của thương hiệu (brand.name) */}
                        <a href={`/products?brand=${brand.name}`}
                            className="flex h-10 items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:border-gray-300">
                            {brand.name}
                        </a>
                    </SwiperSlide>
                ))}

                {/* Giữ nguyên slide "Xem tất cả" */}
                <SwiperSlide className="!h-auto !w-auto">
                    <a href="/products" className="flex h-10 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-50 hover:border-blue-400">
                        Xem tất cả
                    </a>
                </SwiperSlide>
            </Swiper>

            {/* Nút điều hướng (không đổi) */}
            <button className="brand-swiper-button-prev cursor-pointer shadow-md absolute left-0 z-10 top-1/2 flex h-12 w-6 -translate-y-1/2 items-center justify-center rounded-r-full bg-white/80 p-0 transition-all hover:bg-white swiper-button-disabled:opacity-0 swiper-button-disabled:cursor-default">
                <ChevronIcon direction="left" />
            </button>
            <button className="brand-swiper-button-next cursor-pointer shadow-md absolute right-0 z-10 top-1/2 flex h-12 w-6 -translate-y-1/2 items-center justify-center rounded-l-full bg-white/80 p-0 transition-all hover:bg-white swiper-button-disabled:opacity-0 swiper-button-disabled:cursor-default">
                <ChevronIcon direction="right" />
            </button>
        </div>
    );
};

export default BrandSlider;
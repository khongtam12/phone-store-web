// src/components/home/ui/CategorySlider.jsx

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

// Icon cho nút điều hướng
import ChevronIcon from 'components/ui/ChevronIcon';
// Component con cho mỗi danh mục
const CategoryItem = ({ category }) => (
    <a href={`/products?category=${category.name}`} className="flex h-full w-full flex-col items-center justify-start gap-1 rounded-lg bg-gray-100 p-2 text-center transition-colors hover:bg-gray-200 md:flex-row md:justify-start md:text-left">
        <img
            alt={category.name}
            loading="lazy"
            src={category.image}
            className="size-12 object-contain"
        />
        <p className="line-clamp-2 flex h-8 flex-1 items-center text-[10px] font-semibold md:h-auto md:text-sm">
            {category.name}
        </p>
    </a>
);

const CategorySlider = ({ categories }) => {
    if (!categories || categories.length === 0) {
        return null;
    }

    return (
        <div className="relative">
            <Swiper
                modules={[Navigation]}
                slidesPerView={'auto'} // Hiển thị số lượng slide tự động dựa trên chiều rộng
                spaceBetween={8}
                navigation={{
                    nextEl: '.category-swiper-button-next',
                    prevEl: '.category-swiper-button-prev',
                }}
                loop={false} // Quan trọng: không lặp lại slider
                className="!p-1" // Thêm padding để box-shadow không bị cắt
            >
                {categories.map((category) => (
                    <SwiperSlide key={category.categoryId} className="!h-auto !w-[125px] md:!w-[200px]">
                        <CategoryItem category={category} />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Nút điều hướng tùy chỉnh */}
            <button className="category-swiper-button-prev cursor-pointer shadow-md absolute left-0 z-10 top-1/2 flex h-12 w-6 -translate-y-1/2 items-center justify-center rounded-r-full bg-white/80 p-0 transition-all hover:bg-white swiper-button-disabled:opacity-0 swiper-button-disabled:cursor-default">
                <ChevronIcon direction="left" />
            </button>
            <button className="category-swiper-button-next cursor-pointer shadow-md absolute right-0 z-10 top-1/2 flex h-12 w-6 -translate-y-1/2 items-center justify-center rounded-l-full bg-white/80 p-0 transition-all hover:bg-white swiper-button-disabled:opacity-0 swiper-button-disabled:cursor-default">
                <ChevronIcon direction="right" />
            </button>
        </div>
    );
};

export default CategorySlider;
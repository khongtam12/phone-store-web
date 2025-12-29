// src/components/HotSaleSlider.jsx

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCard from "../../Product/ProductCard";

import "swiper/css";
import "swiper/css/navigation";

const HotSaleSlider = ({ products }) => {
    return (
        <div className="h-full">
            <Swiper
                modules={[Navigation]}
                spaceBetween={8}
                navigation
                loop
                // Thêm breakpoints để responsive
                breakpoints={{
                    // Khi màn hình >= 320px
                    320: { slidesPerView: 2, spaceBetween: 8 },
                    // Khi màn hình >= 768px
                    768: { slidesPerView: 3, spaceBetween: 10 },
                    // Khi màn hình >= 1024px
                    1024: { slidesPerView: 4, spaceBetween: 12 },
                }}
                className="rounded-2xl"
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id} className="!h-auto p-2.5">
                        <ProductCard product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HotSaleSlider;
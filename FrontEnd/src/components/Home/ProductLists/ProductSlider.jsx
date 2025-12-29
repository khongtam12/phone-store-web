import ProductCard from "../../Product/ProductCard";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation } from 'swiper/modules';

// Import CSS cho Swiper Grid
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';

// Icon Chevron (tái sử dụng)
import ChevronIcon from 'components/ui/ChevronIcon';

const ProductSlider = ({ products }) => {
    if (!products || products.length === 0) {
        return null;
    }

    return (
        <div className="relative">
            <Swiper
                modules={[Grid, Navigation]}
                // Khoảng cách giữa các slide
                spaceBetween={20}
                // Cấu hình Grid
                grid={{
                    rows: 2, // Hiển thị 2 hàng
                    fill: 'row',
                }}
                //Swiper tự cập nhật khi resize
                observer={true}
                observeParents={true}
                // Cấu hình responsive
                breakpoints={{
                    // Trên mobile: 2 cột
                    320: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                    // Trên desktop: 3 cột
                    1024: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                    },
                }}
                navigation={{
                    nextEl: '.product-swiper-button-next',
                    prevEl: '.product-swiper-button-prev',
                }}
                loop={false}
                className="!py-1"
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id} className="!h-auto">
                        <ProductCard product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Nút điều hướng tùy chỉnh */}
            <button className="product-swiper-button-prev cursor-pointer shadow-md absolute left-0 z-10 top-1/2 flex h-20 w-9 -translate-y-1/2 items-center justify-center rounded-r-full bg-white/80 p-0 transition-all hover:bg-white swiper-button-disabled:opacity-0 swiper-button-disabled:cursor-default">
                <ChevronIcon direction="left" />
            </button>
            <button className="product-swiper-button-next cursor-pointer shadow-md absolute right-0 z-10 top-1/2 flex h-20 w-9 -translate-y-1/2 items-center justify-center rounded-l-full bg-white/80 p-0 transition-all hover:bg-white swiper-button-disabled:opacity-0 swiper-button-disabled:cursor-default">
                <ChevronIcon direction="right" />
            </button>
        </div>
    );
};

export default ProductSlider;
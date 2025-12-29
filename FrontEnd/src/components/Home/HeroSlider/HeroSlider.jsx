import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
export default function HeroSlider({ slides, onSwiper, onSlideChange, onClick }) {
    return (
        <div className="rounded-lg overflow-hidden shadow-sm mt-2">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                onSwiper={onSwiper}
                onSlideChange={onSlideChange}
                className="w-full h-full rounded-lg overflow-hidden"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <a href={slide.href}>
                            <img
                                src={slide.image}
                                alt={slide.alt}
                                className="w-full h-full object-contain cursor-pointer"
                                onClick={() => onClick(slide)}
                            />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

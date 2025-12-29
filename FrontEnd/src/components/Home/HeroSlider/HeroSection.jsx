import React, { useState } from 'react'
import SliderrNavController from './SliderrNavController';
import HeroSlider from './HeroSlider';
export default function HeroSection({ slides }) {
    const [swiperInstance, setSwiperInstance] = useState(null)
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return (
        <div className="w-full space-y-4">
            <SliderrNavController
                slides={slides}
                swiper={swiperInstance}
                activeIndex={activeSlideIndex}
            />
            <HeroSlider
                slides={slides}
                onSwiper={setSwiperInstance}
                onSlideChange={(swiper) => setActiveSlideIndex(swiper.realIndex)}
            />
        </div>
    )
}

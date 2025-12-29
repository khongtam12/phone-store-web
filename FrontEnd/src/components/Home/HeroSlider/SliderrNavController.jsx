import React from 'react'

export default function SliderrNavController({ slides, swiper, activeIndex }) {
    const handleButtonClick = (index) => {
        if (swiper) {
            swiper.slideToLoop(index);
        }
    };
    return (
        <div className="flex items-center justify-center space-x-4  m-0">
            {slides.map((slide, index) => {
                const isActive = activeIndex === index;
                return (
                    <button
                        key={slide.id}
                        onClick={() => handleButtonClick(index)}
                        className={`text-center transition-all duration-300 p-2 cursor-pointer ${isActive ? 'bg-white rounded-xl shadow-sm' : 'bg-transparent'
                            }`}
                    >
                        <h3 className={`font-bold text-sm md:text-base ${isActive ? 'text-red-600' : 'text-gray-500'
                            }`}>
                            {slide.title}
                        </h3>
                        <p className={`text-xs md:text-sm ${isActive ? 'text-gray-700' : 'text-gray-400'
                            }`}>
                            {slide.subtitle}
                        </p>
                    </button>
                );
            })}
        </div>
    )
}

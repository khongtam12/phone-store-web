import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

import slideImage1 from '@/assets/home/slide/690x300_iPhone_17_Pro_Opensale_v3.slide.png';
import slideImage2 from '@/assets/home/slide/Z7-Sliding-1025.slide.png';
import slideImage3 from '@/assets/home/slide/DKNT_Sliding.2.slide.png';
import slideImage4 from '@/assets/home/slide/Sliding_Redmi_15C.slide.png';

const banners = [
    { id: 1, image: slideImage1, alt: 'iPhone 17 Pro', title: 'IPHONE 17 SERIES', subtitle: 'Mua ngay', href: '/product/PR001' },
    { id: 2, image: slideImage2, alt: 'Galaxy Z7', title: 'GALAXY Z7 SERIES', subtitle: 'Đỉnh cao gập mở', href: '/product/PR008' },
    { id: 3, image: slideImage3, alt: 'Oppo X9', title: 'OPPO FIND X9 SERIES', subtitle: 'Đăng ký nhận tin', href: '/product/PR031' },
    { id: 4, image: slideImage4, alt: 'Redmi 14C', title: 'REDMI NOTE 14C', subtitle: 'Ưu đãi hấp dẫn', href: '/product/PR039' },
];

export default function Banner() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % banners.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % banners.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);

    return (
        <div className="relative max-w-[1200px] mx-auto px-4 py-4">
            <div className="relative h-[300px] rounded-xl overflow-hidden">

                {banners.map((banner, index) => (
                    <div
                        key={banner.id}
                        className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                    >
                        <a href={banner.href} className="block w-full h-full">
                            <img
                                src={banner.image}
                                alt={banner.alt}
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay cho chữ nổi bật */}
                            <div className="absolute inset-0 bg-black/20"></div>

                            {/* Text */}
                            <div className="absolute top-1/2 left-12 -translate-y-1/2 text-white">
                                <h2 className="text-4xl font-bold drop-shadow-lg">{banner.title}</h2>
                                <p className="text-xl mt-2 mb-6 drop-shadow-md">{banner.subtitle}</p>
                                <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-medium shadow transition">
                                    Mua ngay
                                </button>
                            </div>
                        </a>
                    </div>
                ))}

                {/* PREV / NEXT */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
                >
                    <ChevronLeft className="text-gray-800" />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
                >
                    <ChevronRight className="text-gray-800" />
                </button>

                {/* DOT INDICATOR */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {banners.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-2 rounded-full cursor-pointer transition-all ${index === currentSlide
                                ? "bg-white w-6"
                                : "bg-white/50 w-2"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

import React from 'react';

// Component con cho từng banner, giúp code sạch hơn
const BannerItem = ({ href, src, alt }) => (
    <a href={href} className="block w-full h-fit">
        <span className="relative inline-block w-full rounded-2xl overflow-hidden shadow-sm transition-all duration-150 hover:shadow-md">
            <img
                alt={alt}
                loading="lazy"
                src={src}
                className="w-full h-auto object-cover transition-opacity duration-500"
                style={{ display: 'block' }}
            />
        </span>
    </a>
);

const ProductListBanners = ({ banners }) => {
    // Nếu không có banner thì không hiển thị gì cả
    if (!banners || banners.length === 0) {
        return null;
    }

    return (
        <div className="hidden flex-1 flex-col justify-between gap-3 md:flex">
            {banners.map((banner) => (
                <BannerItem
                    key={banner.id}
                    href={banner.href}
                    src={banner.src}
                    alt={banner.alt}
                />
            ))}
        </div>
    );
};

export default ProductListBanners;
import React from "react";
import { FormattedMessage, FormattedNumber } from 'react-intl';
import discountBackground from '../../assets/home/hostsale/discount-badge-ui-2025.png';
import zeroBadge from '../../assets/home/hostsale/zero-ins-badge-ui-2025.png';

// Icon components (Không thay đổi)
const StarIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="size-4.5 fill-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
);

const HeartIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="group-hover:animate-heartbeat size-5.5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
);

const ProductCard = ({ product }) => {
    // Xác định xem có nên hiển thị giá cũ hay không
    const shouldShowOldPrice = product.discountPercent > 0 && product.oldPrice;

    return (
        // Container chính: flex-col và h-full RẤT QUAN TRỌNG
        // h-full đảm bảo card này chiếm đủ chiều cao do grid/flex cha quy định
        <div className="flex min-h-50 flex-col rounded-2xl bg-white h-full shadow-sm hover:shadow-lg transition-shadow duration-300">

            {/* Thẻ <a>:
                    - flex-1: Để chiếm hết không gian còn lại (sau khi Footer đã chiếm)
                    - flex flex-col: Để các con bên trong (Ảnh, Content Wrapper) xếp dọc
                  */}
            <a className="group relative flex-1 p-1 pb-0 flex flex-col" href={product.link}>

                {/* PHẦN 1: ẢNH (Không co giãn) */}
                <span className="relative inline-block aspect-square w-full">
                    <img
                        alt={product.name}
                        loading="lazy"
                        src={product.image}
                        className="object-contain aspect-square h-auto w-full scale-90 transition-transform duration-300 group-hover:scale-95"
                    />
                </span>

                {/* PHẦN 2: CONTENT WRAPPER (MỚI)
                          - Thay thế cho các px-1 lẻ tẻ trước đây
                          - flex flex-col: Để các con (Tên, Spacer, Giá) xếp dọc
                          - flex-1: Quan trọng nhất, làm cho wrapper này CHIẾM HẾT KHÔNG GIAN còn lại
                        */}
                <div className="flex flex-col flex-1 px-1">

                    {/* Tên sản phẩm (xếp trên cùng) */}
                    <h3 className="line-clamp-2 text-lg font-bold leading-normal text-neutral-900">
                        {product.name}
                    </h3>

                    {/* SPACER (Đây là mấu chốt)
                                - flex-1: Chiếm hết không gian thừa ở giữa,
                                  đẩy Tên lên trên và Giá + Specs xuống dưới
                              */}
                    <div className="flex-1" />

                    {/* Giá sản phẩm (Bị đẩy xuống đáy) */}
                    <div className="mb-1 flex flex-wrap items-center gap-1.5">
                        <p className="text-red-600 text-lg font-bold ">
                            <FormattedNumber value={product.price} style="decimal" />đ
                        </p>

                        {/* YÊU CẦU 1: Ẩn oldPrice nếu discount = 0 */}
                        {shouldShowOldPrice && (
                            <p className="text-lg text-gray-400 line-through">
                                <FormattedNumber value={product.oldPrice} style="decimal" />đ
                            </p>
                        )}
                    </div>

                    {/* Thông số (Cũng bị đẩy xuống đáy) */}
                    {product.badge_specs && product.badge_specs.length > 0 && (
                        <div className="mt-2 mb-1 flex flex-wrap items-center gap-1.5"> {/* Thêm mb-1 */}
                            {product.badge_specs.map((spec, index) => (
                                <p key={index} className="text-base bg-gray-100 text-gray-700 px-2 py-0.5 rounded-md">
                                    {spec}
                                </p>
                            ))}
                        </div>
                    )}
                </div>


                {/* Discount Badge (Cũng check discount > 0) */}
                {product.discountPercent > 0 && (
                    <div className="absolute -top-1 left-1 flex h-7 w-23 items-center justify-center text-base font-medium text-white"
                        style={{ background: `url(${discountBackground}) center center / 100% 100% no-repeat` }}
                    >
                        Giảm
                        <span className="ml-0.5">
                            {Number(product?.discountPercent ?? 0).toFixed(1)}%
                        </span>
                    </div>
                )}


                {/* Installment Badge */}
                {product.hasZeroInstallment && (
                    <div
                        className="absolute top-0 -right-1.25 flex h-7.25 w-18.75 items-center justify-center overflow-hidden text-[10px] font-medium text-blue-500"
                        style={{ background: `url(${zeroBadge}) center center / 100% 100% no-repeat` }}
                    >
                        <span className="mb-2 line-clamp-1 text-[10px] font-normal md:mb-1.5">
                            Trả góp <span className="text-xs font-medium">0%</span>
                        </span>
                    </div>
                )}
            </a>

            {/* Footer (mt-auto sẽ đẩy nó xuống đáy của .flex-col bọc ngoài cùng) */}
            <div className="mt-auto flex items-center justify-between px-2.5 pt-1.5 pb-2.5">
                <div className="flex items-center gap-0.5 text-lg font-semibold">
                    <StarIcon />
                    <span>{Number(product?.rating ?? 0).toFixed(1)}</span>
                </div>

                <button className="group ml-auto flex h-8 items-center gap-1 text-gray-600 hover:text-red-500 transition-colors">
                    <HeartIcon />
                    <span className="hidden sm:inline-block text-sm">Yêu thích</span>
                </button>
            </div>
        </div>
    );
};

export default React.memo(ProductCard);
import React from "react";
import HotSaleCountdown from "./HotSaleCountdown";
import HotSaleSlider from "./HotSaleSlider";
import FlashSaleBanner from "./FlashSaleBanner";
import boxDecorLeft from '../../../assets/home/hostsale/fs-gift-box-2-20-10.png';
import boxDecorRight from '../../../assets/home/hostsale/fs-gift-box-20-10.png';
import backgroundDecor from '../../../assets/home/hostsale/fs-bg-20-10-desk.png';


const HotSaleSection = ({ products }) => {
    const getTomorrowMidnight = () => {
        // Tạo một Date object mới từ timestamp của 0h ngày mai
        return new Date(new Date().setHours(24, 0, 0, 0));
    };
    const SALE_END_TIME = getTomorrowMidnight();
    return (
        <div className="hotSale mt-6">
            <div className="flashSale space-y-4">
                <FlashSaleBanner />
            </div>
            <section
                className="relative rounded-xl shadow-lg p-4 mt-2 min-h-[25rem] overflow-hidden md:overflow-visible"
                style={{
                    background: `url(${backgroundDecor}) center center / 100% 100% no-repeat`,
                }}
            >
                <img
                    alt="Gift Box Left"
                    className="absolute top-1 -left-2 size-14"
                    src={boxDecorLeft}
                />
                <img
                    alt="Gift Box Right"
                    className="absolute -top-10 right-0 size-17"
                    src={boxDecorRight}
                />
                <div className="relative z-10">
                    {/* Header + Countdown */}
                    <div className="mt-2 mb-4 flex flex-col items-center justify-between gap-2 px-6 md:flex-row">
                        <h2 className="text-2xl font-bold text-white uppercase tracking-wider">🔥 Hot Sale</h2>
                        <HotSaleCountdown targetDate={SALE_END_TIME} />
                    </div>

                    {/* Product Slider */}
                    <HotSaleSlider products={products} />
                </div>
            </section>
        </div>
    );
};

export default HotSaleSection;
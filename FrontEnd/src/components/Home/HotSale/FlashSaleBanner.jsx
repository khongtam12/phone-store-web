import React from "react";
import backgroundImage from '../../../assets/home/hostsale/hs-head-20-10.png';
import tabTitle from '../../../assets/home/hostsale/hs-tab-title-20-10.png';
import tagLine from '../../../assets/home/hostsale/tagline-hot-sale.png';
const FlashSaleBanner = () => {
    return (
        <div
            className="relative mx-auto h-10 w-[calc(100%-24px)] md:h-12.5 md:w-[calc(100%-60px)]"
            style={{
                background:
                    `url(${backgroundImage}) center center / 100% 100% no-repeat`,
            }}
        >
            <div className="absolute inset-x-0 bottom-0 flex h-full justify-between px-4 md:inset-x-7">
                <div className="group relative flex h-[calc(100%+2px)] -translate-y-3.5 items-center justify-center transition-all duration-300 select-none">
                    <img
                        alt="Flash Sale - Tab"
                        width="412"
                        height="101"
                        className="absolute top-0 z-0 h-full w-full"
                        src={tabTitle}
                    />
                    <div className="text-md relative z-[1] px-8 text-center font-extrabold uppercase italic md:text-xl text-white">
                        <div className="w-fit text-center">
                            <img
                                alt="title"
                                src={tagLine}
                                className="h-[60px] mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlashSaleBanner;

import React, { useState, useEffect } from "react";

// Hàm tính thời gian còn lại
const calculateTimeLeft = (targetDate) => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    } else {
        // Khi hết giờ
        timeLeft = { hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
};

// Component khối hiển thị số
const TimeBlock = ({ value }) => (
    <div className="relative bg-red-600 text-white text-lg font-bold px-2 py-1 rounded-md shadow-md">
        {String(value).padStart(2, "0")}
        <hr className="absolute top-1/2 left-0 w-full border-t border-red-700" />
        <div className="absolute top-1/2 right-0 h-1 w-1 bg-red-500/50 rounded-l-full -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-0 h-1 w-1 bg-red-500/50 rounded-r-full -translate-y-1/2"></div>
    </div>
);

const HotSaleCountdown = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

    useEffect(() => {
        // Bắt đầu đếm ngược
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);

        // Dọn dẹp interval khi component unmount
        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-white">
            <span className="text-base font-semibold uppercase md:text-lg">Kết thúc sau:</span>
            <div className="flex items-center gap-2 text-xl font-bold">
                <TimeBlock value={timeLeft.hours} /> <span>:</span>
                <TimeBlock value={timeLeft.minutes} /> <span>:</span>
                <TimeBlock value={timeLeft.seconds} />
            </div>
        </div>
    );
};

export default HotSaleCountdown;
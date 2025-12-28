import React from 'react'
const GiftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
    </svg>
);
export default function PromotionSidebar({ promotions }) {
    return (
        <div className="flex flex-col gap-y-4 h-full">
            <div className="bg-white p-4 rounded-lg shadow-sm text-center border-t-4 border-red-500">
                <h3 className="font-semibold text-gray-800">Chào mừng bạn đến với WorldPhone </h3>
                <p className="text-sm text-gray-600 mt-1 mb-3">Nhập hội thành viên WorldPhone  để không bỏ lỡ các ưu đãi hấp dẫn.</p>
                <div className="flex justify-center gap-2">
                    <a href="/login" className="bg-red-600 text-white px-2 py-1 rounded-md text-sm font-semibold hover:bg-red-700 transition-colors">
                        Đăng nhập
                    </a>
                    <a href="/register" className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-sm font-semibold hover:bg-gray-300 transition-colors">
                        Đăng ký
                    </a>
                </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm mt-auto" >
                <ul>
                    {promotions.map(item => (
                        <li key={item.promotionId}>
                            <a href={`/products?promotionId=${item.promotionId}`} className="flex items-center p-2 rounded-md hover:bg-gray-100 transition-colors">
                                <GiftIcon />
                                <span className="text-sm text-gray-700">{item.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

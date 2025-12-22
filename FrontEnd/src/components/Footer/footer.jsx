import { ChevronUp, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {


    return (
        <footer className="bg-gray-100 border-t border-gray-200 text-gray-700">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-8">
                    <div>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-red-600 transition-colors">iPhone Air</a></li>
                            <li><a href="#" className="hover:text-red-600 transition-colors">iPhone 17</a></li>
                            <li><a href="#" className="hover:text-red-600 transition-colors">iPhone 17 Pro</a></li>
                            <li><a href="#" className="hover:text-red-600 transition-colors">Giá iPhone 17 Pro Max</a></li>
                            <li><a href="#" className="hover:text-red-600 transition-colors">iPhone 16</a></li>
                            <li><a href="#" className="hover:text-red-600 transition-colors">iPhone 16 Pro Max</a></li>
                        </ul>
                    </div>

                    <div>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-red-600 transition-colors">Điện thoại</a></li>
                            <li><a href="#" className="hover:text-red-600 transition-colors">iPhone</a></li>
                            <li><a href="#" className="hover:text-red-600 transition-colors">Xiaomi</a></li>
                            <li><a href="#" className="hover:text-red-600 transition-colors">Samsung Galaxy</a></li>
                            <li><a href="#" className="hover:text-red-600 transition-colors">OPPO</a></li>
                        </ul>
                    </div>

                    <div>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-red-600 transition-colors">Laptop</a></li>
                            <li><a href="#" className="hover:text-red-600 transition-colors">Acer</a></li>
                            <li><a href="#" className="hover:text-red-600 transition-colors">Dell</a></li>
                            <li><a href="#" className="hover:text-red-600 transition-colors">HP</a></li>
                        </ul>
                    </div>

                    <div>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-red-600 transition-colors">Tivi</a></li>
                            <li><a href="#" className="hover:text-red-600 transition-colors">Samsung</a></li>
                            <li><a href="#" className="hover:text-red-600 transition-colors">Sony</a></li>
                            <li><a href="#" className="hover:text-red-600 transition-colors">LG</a></li>
                        </ul>
                    </div>

                    <div>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-red-600 transition-colors">Đồ gia dụng</a></li>
                            <li><a href="#" className="hover:text-red-600 transition-colors">Máy hút bụi</a></li>
                            <li><a href="#" className="hover:text-red-600 transition-colors">Build PC</a></li>
                            <li><a href="#" className="hover:text-red-600 transition-colors">Camera</a></li>
                            <li><a href="#" className="hover:text-red-600 transition-colors">Back to School</a></li>
                        </ul>
                    </div>
                </div>

                {/* Thông tin công ty */}
                <div className="border-t border-gray-300 pt-6 text-xs text-gray-600 leading-relaxed">
                    <p className="mb-4">
                        <strong>WorldPhone</strong> - GPĐKKD:
                        0316872372 cấp tại Sở KH&ĐT TP.HCM.<br />
                        Địa chỉ: Nguyễn Văn Bảo/12 Đ. Hạnh Thông, Phường, Gò Vấp, Thành phố Hồ Chí Minh<br />
                        Điện thoại: <a href="tel:02871089666" className="text-red-600 hover:underline">028.7108.9666</a>
                    </p>



                    <div className="flex flex-wrap items-center gap-4">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img
                                src="http://online.gov.vn/Content/EndUser/LogoCCDVSaleNoti/logoSaleNoti.png"
                                alt="Bộ Công Thương"
                                className="h-10"
                            />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img
                                src="//images.dmca.com/Badges/dmca-badge-w100-5x1-09.png?ID=58c80d02-d1ca-4956-b914-9c9c02c2c1d2"
                                alt="DMCA"
                                className="h-10"
                            />
                        </a>
                    </div>
                </div>
            </div>


            <div className="fixed bottom-6 right-6 flex flex-col gap-3">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="bg-gray-900 text-white px-4 py-3 rounded-full shadow-lg hover:bg-gray-800 transition-all flex items-center gap-2 font-medium"
                >
                    <span>Lên đầu</span>
                    <ChevronUp className="w-5 h-5" />
                </button>





            </div>
        </footer>
    );
}

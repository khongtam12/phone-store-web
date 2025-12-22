import { Menu, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className='bg-red-600 text-white w-full'>
            <div className='py-4 px-4'>
                <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-red-700">
                            <Menu className="w-6 h-6" />

                        </button>
                        <a href="/" className="bg-white text-red-600 px-3 py-2 rounded-lg font-bold text-xl whitespace-nowrap">WorldPhone</a>

                    </div>
                    <div className="flex-1 min-w-[250px] max-w-xl order-3 md:order-none w-full md:w-auto">
                        <div className="relative">
                            <input type="text"
                                placeholder="Bạn muốn mua gì hôm nay"
                                className="w-full px-4 py-3 pr-12 rounded-lg text-gray-800 bg-white placeholder-gray-500 focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                        <Link
                            to="/"
                            className="flex items-center gap-2 px-3 py-2 hover:bg-red-700 rounded-lg transition-colors"

                        >
                            Sản Phẩm
                        </Link>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                        <Link
                            to="/"
                            className="flex items-center gap-2 px-3 py-2 hover:bg-red-700 rounded-lg transition-colors"

                        >
                            Liên hệ
                        </Link>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                        <Link
                            to="/"
                            className="flex items-center gap-2 px-3 py-2 hover:bg-red-700 rounded-lg transition-colors"

                        >
                            <ShoppingCart className="w-6 h-6" />
                            <span className="hidden sm:inline font-medium">Giỏ hàng</span>
                        </Link>
                    </div>
                    <div className="flex items-center gap-2">

                        <Link
                            to="/"
                            className="flex items-center gap-2 px-3 py-2 hover:bg-red-700 rounded-lg transition-colors"
                        >
                            <User className="w-6 h-6" />
                            <span className="hidden sm:inline font-medium">Đăng nhập</span>
                        </Link>


                        <Link
                            to="/"
                            className="px-3 py-2 bg-white text-red-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                        >
                            Đăng ký
                        </Link>
                    </div>


                </div>

            </div>
        </header>
    )
}

import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getHomeData } from '../../services/HomeDataService'
import ReactLoading from 'react-loading';
import CategoryMenu from '../../components/Home/Menu/CategoryMenu';
import PromotionSidebar from '../../components/Home/Menu/PromotionSidebar';
import slideImage1 from '../../assets/home/slide/690x300_iPhone_17_Pro_Opensale_v3.slide.png';
import slideImage2 from '../../assets/home/slide/Z7-Sliding-1025.slide.png';
import slideImage3 from '../../assets/home/slide/DKNT_Sliding.2.slide.png';
import slideImage4 from '../../assets/home/slide/Sliding_Redmi_15C.slide.png';
import gifWelcome from '../../assets/home/gif/special-b2s-dday3-m.gif';
import HeroSection from '../../components/Home/HeroSlider/HeroSection';
import HotSaleSection from '../../components/Home/HotSale/HotSaleSection';
import ProductListSection from '../../components/Home/ProductLists/ProductListSection';
const sliderData = [
    {
        id: 1,
        image: slideImage1,
        alt: 'iPhone 17 Pro Promotion',
        title: 'IPHONE 17 SERIES',
        subtitle: 'Mua ngay',
        href: '/product/PR001'
    },
    {
        id: 2,
        image: slideImage2,
        alt: 'Galaxy Z Series Offer',
        title: 'GALAXY Z7 SERIES',
        subtitle: 'Đỉnh cao gập mở',
        href: '/product/PR008'
    },
    {
        id: 3,
        image: slideImage3,
        alt: 'OPPO FIND X9 SERIES  Đăng kí nhận tin',
        title: 'OPPO FIND X9 SERIES',
        subtitle: 'Đỉnh cao gập mở',
        href: '/product/PR031'
    },
    {
        id: 4,
        image: slideImage4,
        alt: 'Redmi Note 14C Series',
        title: 'REDMI NOTE 14C SERIES',
        subtitle: 'Đỉnh cao gập mở',
        href: '/product/PR039'
    },

];
export default function Home() {
    const {
        data: homeData,
        isLoading,
        isError,
        error

    } = useQuery({
        queryKey: ['homeData'],
        queryFn: getHomeData
    })
    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-[300px]">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
            </div>
        )
    }


    if (isError) {
        return (
            <main className="bg-gray-100 py-4">
                <div className="max-w-7xl mx-auto px-4 text-center py-10 text-red-600">
                    <h2>Đã có lỗi xảy ra!</h2>
                    <p>{error.message || 'Không thể tải dữ liệu trang chủ.'}</p>
                </div>
            </main>
        )
    }
    return (
        <div className='bg-gray-100 py-4'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='flex flex-col lg:flex-row gap-6'>
                    <aside className='w-full lg:w-1/5'>
                        <CategoryMenu catogories={homeData?.categories || []} />
                    </aside>
                    <div className='w-full lg:w-3/5'>
                        <HeroSection slides={sliderData} />

                    </div>
                    <aside className='w-full lg:w-1/5'>
                        <PromotionSidebar promotions={homeData?.promotions || []} />
                    </aside>
                </div>

                <div className="gifWelcome">
                    <a href="/chao-nam-hoc-moi" className="mt-2 block leading-none md:mt-6">
                        <span className="cps-image-cdn relative inline-block w-full rounded-lg shadow-md md:block">
                            <img
                                alt="B2S 2025 - DDAY2"
                                className="block mx-auto w-full h-auto object-contain rounded-lg"
                                src={gifWelcome}
                            />
                        </span>
                    </a>
                </div>
                <HotSaleSection products={homeData?.hotSaleProducts || []} />
                <ProductListSection products={homeData?.productList || []} categories={homeData?.categories || []} brands={homeData?.brands || []} />


            </div>

        </div>
    )
}

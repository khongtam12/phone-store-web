import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getHomeData } from '../../services/HomeDataService'
import ReactLoading from 'react-loading';
import CategoryMenu from '../../components/Home/Menu/CategoryMenu';
import PromotionSidebar from '../../components/Home/Menu/PromotionSidebar';

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
                    <div className='w-full lg:3/5'>

                    </div>
                    <aside className='w-full lg:w-1/5'>
                        <PromotionSidebar promotions={homeData?.promotions || []} />
                    </aside>
                </div>

            </div>

        </div>
    )
}

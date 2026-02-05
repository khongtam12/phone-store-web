import React from 'react'
import Banner from './Banner'
import BrandFilter from './BrandFilter'
import CategoryFilter from './CategoryFilter'
export default function Product() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Banner />
            <BrandFilter />
            <CategoryFilter />
        </div>
    )
}

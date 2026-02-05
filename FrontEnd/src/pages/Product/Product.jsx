import React, { useState } from 'react'
import Banner from './Banner'
import BrandFilter from './BrandFilter'
import CategoryFilter from './CategoryFilter'
import { useSearchParams } from 'react-router-dom'
export default function Product() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedBrand, setSelectedBrand] = useState(
        () => searchParams.get("brand") || null
    );
    const [selectedCategory, setSelectedCategory] = useState(
        () => searchParams.get("category") || null
    )
    const handleBrandToggle = (brandName) => {
        setSelectedBrand((prev) => (
            prev === brandName ? null : brandName
        ))
    };
    const handleCategoryToggle = (categoryName) => {
        setSelectedCategory((prev) => (
            prev === categoryName ? null : categoryName
        ))
    };
    return (
        <div className="min-h-screen bg-gray-50">
            <Banner />
            <BrandFilter
                selectedBrand={selectedBrand}
                onBrandToggle={handleBrandToggle}
            />
            <CategoryFilter
                selectedCategory={selectedCategory}
                onCategoryToggle={handleCategoryToggle}
            />
        </div>
    )
}

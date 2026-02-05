import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import BrandFilter from './BrandFilter'
import CategoryFilter from './CategoryFilter'
import { useSearchParams } from 'react-router-dom'
import ProductGrid from './ProductGrid'
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
    useEffect(() => {
        const allFilters = {
            brand: selectedBrand,
            category: selectedCategory
        };
        setSearchParams(allFilters, { replace: true })
    }, [selectedBrand, selectedCategory])
    const [page, setPage] = useState(() => Number(searchParams.get("page")) || 0);

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
            <ProductGrid
                selectedBrand={selectedBrand}
                selectedCategory={selectedCategory}
                page={page}
                setPage={setPage}
            />

        </div>
    )
}

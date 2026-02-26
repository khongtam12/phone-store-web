import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import BrandFilter from './BrandFilter'
import CategoryFilter from './CategoryFilter'
import { useSearchParams } from 'react-router-dom'
import ProductGrid from './ProductGrid'
import FilterSidebar from './FilterSidebar'
export default function Product() {
    const defaultFilters = {
        minPrice: 0,
        maxPrice: 100000000,
        storages: [],
        isStockReady: false,
    };
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
    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    }
    const handleResetAllFilters = () => {
        setSelectedBrand(null);
        setSelectedCategory(null);
        setFilters(defaultFilters);
        setSearchParams({}, { replace: true });

    }

    useEffect(() => {
        const allFilters = {
            brand: selectedBrand,
            category: selectedCategory
        };
        setSearchParams(allFilters, { replace: true })
    }, [selectedBrand, selectedCategory])
    const [page, setPage] = useState(() => Number(searchParams.get("page")) || 0);
    const [filters, setFilters] = useState(() => ({
        minPrice: searchParams.get("minPrice") || 0,
        maxPrice: searchParams.get("maxPrice") || 100000000,
        storages: searchParams.getAll('storages') || [], // dùng getAll cho mảng
        isStockReady: searchParams.get('isStockReady') === 'true' || false,
    }))
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
            <div className="max-w-[1200px] mx-auto px-4 py-6">
                <div className="flex gap-6">
                    <FilterSidebar
                        filters={filters}
                        onFiltersChange={handleFilterChange}
                        onResetAllFilters={handleResetAllFilters}
                    />
                    <ProductGrid
                        selectedBrand={selectedBrand}
                        selectedCategory={selectedCategory}
                        page={page}
                        setPage={setPage}
                    />
                </div>
            </div>

        </div>
    )
}

import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import BrandFilter from './BrandFilter'
import CategoryFilter from './CategoryFilter'
import { useSearchParams } from 'react-router-dom'
import ProductGrid from './ProductGrid'
import FilterSidebar from './FilterSidebar'
const defaultFilters = {
    minPrice: 0,
    maxPrice: 100000000,
    storages: [],
    isStockReady: false,
};

const createCleanParams = (obj) => {
    const params = {};

    Object.entries(obj).forEach(([key, value]) => {
        if (value === null || value === undefined) return;

        if (key === "isStockReady") {
            if (value === true) {
                params[key] = "true";
            }
            return;
        }

        if (Array.isArray(value)) {
            if (value.length > 0) {
                params[key] = value;
            }
            return;
        }

        if (value !== "" && value !== "formal") {
            params[key] = value;
        }
    });

    return params;
};
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
    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    }
    const handleResetAllFilters = () => {
        setSelectedBrand(null);
        setSelectedCategory(null);
        setFilters(defaultFilters);
        setPage(0);
        setSearchParams({}, { replace: true });

    }
    const [filters, setFilters] = useState(() => ({
        minPrice: Number(searchParams.get('minPrice')) || 0,
        maxPrice: Number(searchParams.get('maxPrice')) || 100000000,
        storages: searchParams.getAll('storages') || [],
        isStockReady: searchParams.get('isStockReady') === 'true' || false,
    }))
    const [page, setPage] = useState(() => Number(searchParams.get("page")) || 0);
    useEffect(() => {
        setPage(0);
    }, [selectedBrand, selectedCategory, filters]);
    useEffect(() => {
        const allFilters = {
            brand: selectedBrand,
            category: selectedCategory,
            minPrice: filters.minPrice === 0 ? null : filters.minPrice,
            maxPrice: filters.maxPrice === 100000000 ? null : filters.maxPrice,
            storages: filters.storages,
            isStockReady: filters.isStockReady,
            page: page

        };
        setSearchParams(createCleanParams(allFilters), { replace: true });
    }, [selectedBrand, selectedCategory, filters, page, setSearchParams]);

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
                        filters={filters}
                        page={page}
                        setPage={setPage}
                    />
                </div>
            </div>

        </div>
    )
}

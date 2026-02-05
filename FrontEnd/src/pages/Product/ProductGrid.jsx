import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/ui/ProductCard';
import { filterProducts } from '@/services/productService';

export default function ProductGrid({
    selectedBrand,
    selectedCategory,
    filter,
    sort,
    onSortChange,
    promotionId,
    page,
    setPage,
    search
}) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    useEffect(() => {
        setPage(0); // page = 0 (trang đầu tiên)
    }, [selectedBrand, selectedCategory, filter, sort, promotionId]);
    useEffect(() => {
        setLoading(true);


        const fetchFilteredProducts = async () => {
            try {
                const filtersPayload = {
                    brand: selectedBrand,
                    category: selectedCategory,
                    minPrice: filter.minPrice,
                    maxPrice: filter.maxPrice,
                    storages: filter.storages,
                    sort: sort,
                    isStockReady: filter.isStockReady,
                    promotionId: promotionId,
                    search: search
                };

                const data = await filterProducts(filtersPayload, page, 16);

                setProducts(data.content);
                setTotalPages(data.totalPages);
            } catch (error) {
                console.error('Error filtering products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchFilteredProducts();
    }, [selectedBrand, selectedCategory, filter, sort, promotionId, page, search]);

    return (
        <div className="flex-1">

            {/* HEADER */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800">
                    Điện thoại nổi bật
                    <span className="text-sm font-normal text-gray-500 ml-2">
                        ({products.length} sản phẩm)
                    </span>
                </h2>

                {/* SORT SELECT */}
                <select
                    onChange={onSortChange}
                    value={sort}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                    <option value="formal">Phổ biến</option>
                    <option value="priceasc">Giá thấp – cao</option>
                    <option value="pricedesc">Giá cao – thấp</option>
                    <option value="newest">Mới nhất</option>
                    <option value="promotion">Khuyến mãi hot</option>
                </select>
            </div>

            {/* MAIN CONTENT */}
            {loading ? (
                <div className="text-center py-12 text-gray-500">Đang tải sản phẩm...</div>
            ) : products.length > 0 ? (
                <>
                    {/* PRODUCT GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    {/* PAGINATION */}
                    <div className="flex justify-center items-center mt-8 gap-3">

                        {/* PREV BUTTON */}
                        <button
                            disabled={page === 0}
                            onClick={() => setPage(page - 1)}
                            className={`px-5 py-2 rounded-lg border shadow-sm transition ${page === 0
                                ? "bg-gray-200 cursor-not-allowed"
                                : "bg-white hover:bg-gray-100"
                                }`}
                        >
                            ← Trước
                        </button>

                        {/* PAGE INDICATOR */}
                        <span className="text-sm text-gray-700">
                            Trang <strong>{page + 1}</strong> / {totalPages}
                        </span>

                        {/* NEXT BUTTON */}
                        <button
                            disabled={page + 1 >= totalPages}
                            onClick={() => setPage(page + 1)}
                            className={`px-5 py-2 rounded-lg border shadow-sm transition ${page + 1 >= totalPages
                                ? "bg-gray-200 cursor-not-allowed"
                                : "bg-white hover:bg-gray-100"
                                }`}
                        >
                            Sau →
                        </button>
                    </div>
                </>
            ) : (
                <div className="text-center py-12">
                    <p className="text-gray-500">Không tìm thấy sản phẩm phù hợp</p>
                </div>
            )}
        </div>
    );
}

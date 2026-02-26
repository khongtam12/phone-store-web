import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/Product/ProductCard'
import { filterProducts } from '@/services/productService';

export default function ProductGrid({
    selectedBrand,
    selectedCategory,
    filters,
    page,
    setPage
}) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        setLoading(true);


        const fetchFilteredProducts = async () => {
            try {
                const filtersPayload = {
                    brand: selectedBrand,
                    category: selectedCategory,
                    minPrice: filters.minPrice === 0 ? null : filters.minPrice,
                    maxPrice: filters.maxPrice === 100000000 ? null : filters.maxPrice,
                    storages: filters.storages.length === 0 ? null : filters.storages,
                    isStockReady: filters.isStockReady
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
    }, [selectedBrand, selectedCategory, filters, page]);

    return (
        <div className="flex-1">


            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800">
                    Điện thoại nổi bật
                    <span className="text-sm font-normal text-gray-500 ml-2">
                        ({products.length} sản phẩm)
                    </span>
                </h2>


            </div>

            {loading ? (
                <div className="text-center py-12 text-gray-500">Đang tải sản phẩm...</div>
            ) : products.length > 0 ? (
                <>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>


                    <div className="flex justify-center items-center mt-8 gap-3">


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


                        <span className="text-sm text-gray-700">
                            Trang <strong>{page + 1}</strong> / {totalPages}
                        </span>


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

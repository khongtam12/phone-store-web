import { ChevronDown } from "lucide-react";

import { useState, useEffect } from 'react';
import { Range } from 'react-range';

export default function FilterSidebar({ filters, onFiltersChange, onResetAllFilters }) {
    const [expandedSections, setExpandedSections] = useState(['price', 'storages', 'isStockReady']);

    const [priceRange, setPriceRange] = useState([
        filters.minPrice,
        filters.maxPrice,
    ]);


    useEffect(() => {
        setPriceRange([filters.minPrice, filters.maxPrice]);
    }, [filters.minPrice, filters.maxPrice]);



    const toggleSection = (section) => {
        setExpandedSections(prev =>
            prev.includes(section) ? prev.filter(s => s !== section) : [...prev, section]
        );
    };

    const handleCheckboxChange = (sectionId, option) => {

        if (sectionId === 'isStockReady') {
            onFiltersChange({ ...filters, isStockReady: !filters.isStockReady });
            return;
        }


        const currentValues = filters[sectionId] || [];
        let newValues;

        if (currentValues.includes(option)) {
            newValues = currentValues.filter(v => v !== option);
        } else {
            newValues = [...currentValues, option];
        }

        onFiltersChange({ ...filters, [sectionId]: newValues });
    };

    const resetFilters = () => {
        onResetAllFilters();
    };

    const handlePriceChange = (values) => {
        setPriceRange(values);

        onFiltersChange({
            ...filters,
            minPrice: values[0],
            maxPrice: values[1]
        });
    };


    const filterSections = [
        { id: 'price', title: 'Mức giá' },
        { id: 'storages', title: 'Bộ nhớ trong', options: ['64GB', '128GB', '256GB', '512GB', '1TB'] },
        { id: 'isStockReady', title: 'Sẵn sàng', options: ['Còn hàng'] },
    ];
    return (
        <aside className="w-64 flex-shrink-0 hidden lg:block">
            <div className="bg-white rounded-lg shadow-sm p-4 sticky top-20">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-gray-800">Bộ lọc</h3>
                    <button
                        className="text-sm text-red-600 hover:text-red-700"
                        onClick={resetFilters}
                    >
                        Xóa tất cả
                    </button>
                </div>

                {filterSections.map((section) => (
                    <div key={section.id} className="border-t border-gray-100 py-3">
                        <button
                            onClick={() => toggleSection(section.id)}
                            className="flex items-center justify-between w-full text-left"
                        >
                            <span className="font-medium text-gray-700 text-sm">{section.title}</span>
                            <ChevronDown
                                className={`w-4 h-4 text-gray-400 transition-transform ${expandedSections.includes(section.id) ? 'rotate-180' : ''
                                    }`}
                            />
                        </button>

                        {expandedSections.includes(section.id) && (
                            <div className="mt-3 space-y-2">
                                {section.id === 'price' ? (
                                    <div className="px-2 py-4">

                                        <Range
                                            step={500000}
                                            min={0}
                                            max={100000000}
                                            values={priceRange}
                                            onChange={handlePriceChange}

                                            renderTrack={({ props, children }) => (
                                                <div
                                                    {...props}
                                                    className="h-1 bg-gray-200 rounded relative"
                                                >
                                                    <div
                                                        style={{
                                                            position: 'absolute',
                                                            height: '100%',
                                                            background: '#ef4444',
                                                            borderRadius: 'inherit',
                                                            left: `${(priceRange[0] / 100000000) * 100}%`,
                                                            right: `${100 - (priceRange[1] / 100000000) * 100}%`,
                                                        }}
                                                    />
                                                    {children}
                                                </div>
                                            )}
                                            renderThumb={({ props }) => (
                                                <div
                                                    {...props}
                                                    className="w-4 h-4 bg-red-600 rounded-full focus:outline-none"
                                                />
                                            )}
                                        />
                                        <div className="flex justify-between mt-2 text-sm text-gray-600">
                                            <span>{priceRange[0].toLocaleString()} ₫</span>
                                            <span>{priceRange[1].toLocaleString()} ₫</span>
                                        </div>
                                    </div>
                                ) : (
                                    section.options?.map((option) => (
                                        <label key={option} className="flex items-center gap-2 cursor-pointer group">
                                            <input
                                                type="checkbox"

                                                checked={
                                                    section.id === 'isStockReady'
                                                        ? filters.isStockReady === true
                                                        : Array.isArray(filters[section.id])
                                                            ? filters[section.id].includes(option)
                                                            : false
                                                }
                                                onChange={() => handleCheckboxChange(section.id, option)}
                                                className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                                            />
                                            <span className="text-sm text-gray-600 group-hover:text-gray-900">
                                                {option}
                                            </span>
                                        </label>
                                    ))
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </aside>
    );
}

import React from 'react'

export default function CategoryMenu({ catogories }) {
    return (
        <div className='bg-gray-100 p-4 shadow-sm h-full'>
            <h2 className='text-lg font-bold mb-3 border-b pb-2'>Danh Mục</h2>
            <nav>
                <ul>
                    {catogories.map((category) => (
                        <li key={category.categoryId}>
                            <a href='#'
                                className='block py-2 px-3 rounded-md  hover:bg-gray-100 transition-colors'
                            >
                                {category.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

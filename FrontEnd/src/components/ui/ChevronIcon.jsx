import React from 'react';

const ChevronIcon = ({ direction = 'left' }) => (
    <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        className={`size-6 text-neutral-800 md:size-7.5 ${direction === 'left' ? 'mr-1 md:mr-1.5' : 'ml-1 md:ml-1.5'}`}
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
    >
        {direction === 'left'
            ? <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M328 112 184 256l144 144"></path>
            : <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="m184 112 144 144-144 144"></path>
        }
    </svg>
);

export default ChevronIcon;
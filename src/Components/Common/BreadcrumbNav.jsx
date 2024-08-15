import React from 'react';

const BreadcrumbNav = ({ links }) => {
    return (
        <nav className="hidden sm:flex items-center space-x-2">
            {links.map((link, index) => {
                return (
                    (index === 0) ? (
                        <div key={index} className="flex items-center">
                        <a href={link.path} className="text-sm mt-1">
                            {link.label}
                        </a>
                    </div>
                    ):(
                        <div key={index} className="flex items-center">
                        <svg
                            className=" text-gray-500"
                            height={25}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 10l5 5-5 5" />
                        </svg>
                        <a href={link.path} className="text-sm mt-1 font-bold text-blue-950">
                            {link.label}
                        </a>
                    </div>
                    )
                )
            })}
        </nav>
    );
};

export default BreadcrumbNav;

import React, { useState } from 'react'
import BreadcrumbNav from './BreadcrumbNav';
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import WidgetSelector from '../Dashboard/WidgetSelector';

const links = [
    { path: '/', label: 'Home' },
    { path: '/', label: 'Dashboard V2' },
];

const Navbar = () => {
    const [isSelectorOpen, setSelectorOpen] = useState(false);

    const toggleWidgetSelector = () => {
        setSelectorOpen(!isSelectorOpen);
    };
    return (
        <div className='h-11 flex items-center justify-between border-b bg-white px-3 md:px-10'>
            <BreadcrumbNav links={links} />
            <div className='flex gap-6 items-center'>
                <div className='relative'>
                    <svg className="absolute top-2 left-2 w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search widgets..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="py-[2px] px-8 w-[250px] md:w-[300px] focus:outline-none bg-[#e5f2fe] border border-[#b5dbff] rounded"
                    />
                </div>
                <button onClick={toggleWidgetSelector} className='bg-[#e5f2fe] ml-3 border border-[#b5dbff] px-3 py-[2px] rounded '>Category List</button>
                <div className='sm:flex hidden gap-2 hover:cursor-pointer'>
                    <MdOutlineNotificationsActive size={20} />
                    <FaRegUser size={20} />
                </div>
            </div>
            <WidgetSelector isOpen={isSelectorOpen} onClose={toggleWidgetSelector} />
        </div>
    )
}

export default Navbar
import React from 'react'
import { FaPlus } from "react-icons/fa6";

const WidgetButton = ({ text }) => {
    return (
        <button className='flex items-center gap-2 text-sm font-semibold border-2 
        px-2 py-1 border-[#ababab]/35 rounded-lg w-fit'>
            {text} <FaPlus size={15}/>
        </button>
    )
}

export default WidgetButton
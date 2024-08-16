import React, { useState } from 'react'
import WidgetButton from '../Components/Common/WidgetButton'
import { MdLoop } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaChevronDown, FaClock } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { addWidget, deleteWidget } from '../features/dashboard/dashboardSlice';
import AddWidgetModel from '../Components/Dashboard/AddWidgetModel';
import { IoClose } from 'react-icons/io5';

const Dashboard = () => {
    const categories = useSelector((state) => state.dashboard.categories);
    const dispatch = useDispatch();
    const [newWidget, setNewWidget] = useState({ name: '', text: '', category: '' });
    const [searchQuery, setSearchQuery] = useState('');

    const AddWidgetHandler = (categoryName) => {
        const widget = { name: newWidget.name, text: newWidget.text, visible: true }
        dispatch(addWidget({ categoryName, widget }))
        setNewWidget({ name: '', text: '', category: '' })
    }

    const handleDeleteWidget = (categoryName, widgetName) => {
        dispatch(deleteWidget({ categoryName, widgetName }));
    };
    return (
        <div className='px-3 md:px-10 py-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-bold'>CNAAP Dashboard</h1>
                <div className='flex items-center gap-2'>
                    <div className='relative'>
                        <svg className="absolute top-2 left-2 w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search widgets..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="py-[2px] px-8 w-[250px] md:w-[300px] focus:outline- bg-white border border-[#b5dbff] rounded"
                        />
                    </div>
                    <div className='hidden md:flex gap-2'>
                        <WidgetButton text={'Add Widget'} />
                        <button className='btn'><MdLoop size={20} /></button>
                        <button className='btn'><BsThreeDotsVertical size={20} /></button>
                        <button style={{ borderColor: 'darkblue' }} className='btn flex items-center gap-1'><FaClock />| Last 2 days <FaChevronDown /></button>
                    </div>
                </div>
            </div>

            <div>
                {categories.map(category => (
                    <div key={category.name} className='mt-6'>
                        <h2 className='text-md font-bold'>{category.name}</h2>
                        <div className=''>
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
                                {category.widgets
                                    .filter(widget => widget.visible &&
                                        (widget.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                            widget.text.toLowerCase().includes(searchQuery.toLowerCase())))
                                    .map(widget => (
                                        <div key={widget.name} className='relative flex justify-between h-[150px] bg-white border-2 p-4 rounded-xl'>
                                            <div>
                                                <h3 className='font-medium'>{widget.name}</h3>
                                                <p>{widget.text}</p>
                                            </div>
                                            <button onClick={() => handleDeleteWidget(category.name, widget.name)} className='absolute right-2 top-2'>
                                                <IoClose />
                                            </button>
                                        </div>
                                    ))}
                                <div className='flex justify-center items-center h-[150px] bg-white border-2 p-4 rounded-xl'>
                                    <AddWidgetModel AddWidgetHandler={AddWidgetHandler} newWidget={newWidget} setNewWidget={setNewWidget} category={category} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard
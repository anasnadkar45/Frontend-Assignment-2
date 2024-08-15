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
                    <input
                        type="text"
                        placeholder="Search Widgets..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} // Step 2: Update search query
                        className="border border-gray-300 rounded px-2 py-1"
                    />
                    <div>
                        <WidgetButton text={'Add Widget'} />
                    </div>
                    <button className='btn'><MdLoop size={20} /></button>
                    <button className='btn'><BsThreeDotsVertical size={20} /></button>
                    <button style={{ borderColor: 'darkblue' }} className='btn flex items-center gap-1'><FaClock />| Last 2 days <FaChevronDown /></button>
                </div>
            </div>

            <div>
                {categories.map(category => (
                    <div key={category.name} className='mt-6'>
                        <h2 className='text-md font-bold'>{category.name}</h2>
                        <div className=''>
                            <div className='grid grid-cols-3 gap-3'>
                                {category.widgets
                                    .filter(widget => widget.visible &&
                                        (widget.name.toLowerCase().includes(searchQuery.toLowerCase()) || // Step 3: Filter based on search
                                            widget.text.toLowerCase().includes(searchQuery.toLowerCase()))) // Optional: Filter by text
                                    .map(widget => (
                                        <div key={widget.name} className='relative flex justify-between items-center h-[150px] bg-white border-2 p-4 rounded-xl'>
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
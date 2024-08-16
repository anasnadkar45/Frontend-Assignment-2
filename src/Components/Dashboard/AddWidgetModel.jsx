import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';

const AddWidgetModel = ({ newWidget, setNewWidget, category, AddWidgetHandler }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button 
                onClick={() => setShowModal(true)} 
                className='flex items-center gap-2 text-sm font-semibold border px-2 py-1 bg-[#e5f2fe] border-gray-300 rounded w-fit'
            >
                Add Widget <FaPlus size={15} />
            </button>
            
            {showModal && (
                <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-30">
                    <div className="bg-white p-4 rounded shadow-lg w-[400px]">
                        <div className="flex justify-between items-center border-b pb-2 mb-2">
                            <h3 className="text-xl font-semibold">Add Widget</h3>
                            <button
                                className="text-gray-600 text-xl"
                                onClick={() => setShowModal(false)}
                            >
                                &times;
                            </button>
                        </div>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            AddWidgetHandler(category.name);
                            setShowModal(false);
                        }}>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-1">Name</label>
                                <input 
                                    type="text" 
                                    required 
                                    value={newWidget.name} 
                                    onChange={(e) => setNewWidget({ ...newWidget, name: e.target.value })}
                                    className="border rounded w-full bg-transparent py-2 px-3"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-1">Text</label>
                                <textarea 
                                    type="text" 
                                    required 
                                    value={newWidget.text} 
                                    onChange={(e) => setNewWidget({ ...newWidget, text: e.target.value })}
                                    className="border rounded w-full bg-transparent py-2 px-3"
                                />
                            </div>
                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="text-red-500 font-bold px-4 py-2 rounded border border-red-500"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white font-bold px-4 py-2 rounded"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default AddWidgetModel;

import React, { useState } from 'react'
import WidgetButton from '../Common/WidgetButton';
import { FaPlus } from 'react-icons/fa6';

const AddWidgetModel = ({ newWidget, setNewWidget, category, AddWidgetHandler }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button onClick={() => setShowModal(true)} className='flex items-center gap-2 text-sm font-semibold border-2 px-2 py-1 border-[#ababab]/35 rounded-lg w-fit'>
                Add Widget <FaPlus size={15}/>
            </button >
            {
                showModal ? (
                    <div>
                        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                        <h3 className="text-3xl font=semibold">General Info</h3>
                                        <button
                                            className="bg-transparent border-0 text-black float-right"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                                                x
                                            </span>
                                        </button>
                                    </div>
                                    <div className="relative p-6 flex-auto">
                                        <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                                            <label className="block text-black text-sm font-bold mb-1">
                                                Name
                                            </label>
                                            <input type="text" value={newWidget.name} onChange={(e) => setNewWidget({ ...newWidget, name: e.target.value })} className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                                            <label className="block text-black text-sm font-bold mb-1">
                                                Text
                                            </label>
                                            <input value={newWidget.text} onChange={(e) => setNewWidget({ ...newWidget, text: e.target.value })} className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                                        </form>
                                    </div>
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Cancle
                                        </button>
                                        <button
                                            className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                            type="submit"
                                            onClick={() => {
                                                AddWidgetHandler(category.name)
                                                setShowModal(false)
                                            }}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                ) : null}
        </>
    )
}

export default AddWidgetModel
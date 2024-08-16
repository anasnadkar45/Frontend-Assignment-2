import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleWidgetVisibility } from "../../features/dashboard/dashboardSlice";
import { IoClose } from "react-icons/io5";

const WidgetSelector = ({ isOpen, onClose }) => {
    const categories = useSelector((state) => state.dashboard.categories);
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState(categories.length > 0 ? categories[0].name : '');

    const handleToggleVisibility = (categoryName, widgetName) => {
        dispatch(toggleWidgetVisibility({ categoryName, widgetName }));
    };

    const handleTabChange = (categoryName) => {
        setActiveTab(categoryName);
    };

    if (!isOpen) return null;

    return (
        <div style={styles.overlay}>
            <div style={styles.modal} className="w-[100%] md:w-[70%]">
                <div className="flex justify-between items-center bg-blue-950 text-white p-4">
                    <h3>Select Widgets</h3>
                    <button
                        className="text-2xl"
                        onClick={onClose}
                    >
                        <IoClose />
                    </button>
                </div>
                <div className="px-3">
                    <p className="text-black pt-4 font-semibold">
                        Personalize your dashboard by adding the following widgets.
                    </p>
                    <div className="flex border-b border-gray-300 mb-4">
                        {categories.map((category) => (
                            <button
                                key={category.name}
                                onClick={() => handleTabChange(category.name)}
                                className={`py-2 px-4 text-sm ${activeTab === category.name ? 'border-b-2 border-gray-800 font-semibold' : 'text-gray-500'}`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {categories.map((category) => (
                        category.name === activeTab && (
                            <div key={category.name} className="text-black">
                                <p className="text-lg font-semibold mb-2">Widgets</p>
                                <ul>
                                    {category.widgets.map((widget) => (
                                        <li key={widget.name} className="flex items-center mb-2 p-1 border-2 rounded">
                                            <input
                                                type="checkbox"
                                                checked={widget.visible}
                                                onChange={() => handleToggleVisibility(category.name, widget.name)}
                                                className="mr-2"
                                            />
                                            {widget.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    ))}
                </div>
                <button
                    className="fixed bottom-6 right-6 bg-gray-800 text-white px-6 py-2 rounded"
                    onClick={onClose}
                >
                    Confirm
                </button>
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "flex-end",
        zIndex: 1000,
    },
    modal: {
        background: "white",
        height: "auto",
        overflow: "auto",
        zIndex: 1001,
    },
};

export default WidgetSelector;

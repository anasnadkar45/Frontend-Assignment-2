import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleWidgetVisibility } from "../../features/dashboard/dashboardSlice";
import { IoClose } from "react-icons/io5";

const WidgetSelector = ({ isOpen, onClose }) => {
    const categories = useSelector((state) => state.dashboard.categories);
    const dispatch = useDispatch();

    const handleToggleVisibility = (categoryName, widgetName) => {
        dispatch(toggleWidgetVisibility({ categoryName, widgetName }));
    };

    if (!isOpen) return null;

    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <div className="flex justify-between items-center bg-gray-800 text-white p-4">
                    <h3>Select Widgets</h3>
                    <button
                        className="text-2xl"
                        onClick={onClose}
                    >
                        <IoClose />
                    </button>
                </div>

                <p className="text-black text-center pt-4 text-lg">
                    Personalize your dashboard by adding the following widgets.
                </p>

                {categories.map((category) => (
                    <div className="text-black p-4" key={category.name}>
                        <h3 className="font-semibold">{category.name}</h3>
                        <ul>
                            {category.widgets.map((widget) => (
                                <li key={widget.name} className="flex items-center">
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
                ))}
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
        width: "50%",
        height: "auto",
        overflow: "auto",
        zIndex: 1001,
    },
};

export default WidgetSelector;

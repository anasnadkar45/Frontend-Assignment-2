import { createSlice } from "@reduxjs/toolkit";
import data from '../../data.json';

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: data,
    reducers: {
        addWidget: (state, action) => {
            const { categoryName, widget } = action.payload;
            const category = state.categories.find(category => category.name === categoryName);
            if (category) {
                category.widgets.push(widget);
            }
        },
        deleteWidget: (state, action) => {
            const { categoryName, widgetName } = action.payload;
            const category = state.categories.find(category => category.name === categoryName);
            if (category) {
                category.widgets = category.widgets.filter(widget => widget.name !== widgetName);
            }
        },
        toggleWidgetVisibility: (state, action) => {
            const { categoryName, widgetName } = action.payload;
            const category = state.categories.find(category => category.name === categoryName);
            if (category) {
                const widget = category.widgets.find(widget => widget.name === widgetName);
                if (widget) {
                    widget.visible = !widget.visible; // Toggle visibility
                }
            }
        },
    },
});

export const { addWidget, deleteWidget, toggleWidgetVisibility } = dashboardSlice.actions;
export default dashboardSlice.reducer;

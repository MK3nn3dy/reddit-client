import { configureStore } from "@reduxjs/toolkit";
import articleReducer from '../features/articles/articleSlice';
import shortcutReducer from '../features/shortcutbar/shortcutSlice';

export const store = configureStore({
    reducer: {
        articles: articleReducer,
        shortcuts: shortcutReducer,
    }
}) 
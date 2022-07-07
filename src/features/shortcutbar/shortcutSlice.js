import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    icons: [
        "Ghost",
        "Alien",
        "UFO",
        "Bigfoot",
        "Cryptid",
        "Telekinesis",
    ],
    iconsLibrary: [
        "WendigoStories",
        "Mothman",
        "Lochnessmonster",
        "Alienabduction",
        "Crawlersightings",
        "Cryptozoology",
        "Humanoidencounters"
    ],
    menuVisible: false,
};

const shortcutSlice = createSlice({
    name: 'shortcuts',
    initialState: initialState,
    reducers: {
        addIcon:(state, action) => {
            state.icons.push(action.payload);
        },
        removeIcon: (state, action) => {
            state.icons.pop(action.payload);
        },
        addIconToAdd: (state, action) => {
            state.iconsLibrary.push(action.payload);
        },
        removeIconToAdd: (state, action) => {
            console.log(action.payload);
            state.iconsLibrary.splice(state.iconsLibrary.indexOf(action.payload), 1);
        },
        showHideMenu: (state, action) => {
            state.menuVisible = action.payload;
        }
    }
});

export const { addIcon, removeIcon, addIconToAdd, removeIconToAdd, showHideMenu } = shortcutSlice.actions;
export default shortcutSlice.reducer;
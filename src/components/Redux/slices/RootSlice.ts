import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        base: 'Base',
        amount_of_base: 'Amount of Base',
        mixer: 'Mixer',
        amount_of_mixer: 'Amount of Mixer',
        blend: 'Blend',
    },
    reducers: {
        chooseBase: (state, action) => { state.base = action.payload },
        chooseAmountOfBase: (state, action) => { state.amount_of_base = action.payload },
        chooseMixer: (state, action) => { state.mixer = action.payload },
        chooseAmountOfMixer: (state, action) => { state.amount_of_mixer = action.payload },
        chooseBlend: (state, action) => { state.blend = action.payload }

    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseBase, chooseAmountOfBase, chooseMixer, chooseAmountOfMixer, chooseBlend } = rootSlice.actions;
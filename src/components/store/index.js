// noinspection JSUnresolvedFunction,JSDeprecatedSymbols

import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = {counter: 0, showCounter: true};

/* Here state is still immutable but is taken care of for us.
* Overwriting is thus allowed. */

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        },
        increase(state, action) {
            state.counter += action.payload;
        }
    }
});

const store = configureStore({
    reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;
export default store;
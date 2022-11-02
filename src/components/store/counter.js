import {createSlice} from "@reduxjs/toolkit";

const initialCounterState = {counter: 0, showCounter: true};

/* Here state is still immutable but is taken care of for us.
* Overwriting is thus allowed. */

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
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
        },
    }
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
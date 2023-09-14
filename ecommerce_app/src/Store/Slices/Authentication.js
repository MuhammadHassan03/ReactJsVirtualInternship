import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isuser: false,
    user : [],
}

const authentication = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        addUserDetails(state, action){
            state.isuser = true;
            state.user = action.payload;
        }
    }
})

export const {addUserDetails} = authentication.actions;
export default authentication.reducer;
import { createSlice } from "@reduxjs/toolkit";

const feedSlice=createSlice({
    name:"feed",
    initialState:null,
    reducers:{
        addFeed:(state,action)=>{
            return action.payload
        },
        removeFromFeed:(state,action)=>{
            let  arr= state.filter((el)=>el._id != action.payload)
            return arr;
        }
    }

})

export const {addFeed,removeFromFeed} = feedSlice.actions;
export default feedSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const connectionSlice=createSlice({
    name:"Connections",
    initialState:"",
    reducers:{
        addConnection:(state,action)=>{
          return action.payload
        },
        removeConnections:(state,action)=>{
            return null;
        }
    }
})


export default connectionSlice.reducer;
export const  {addConnection,removeConnections}=connectionSlice.actions;
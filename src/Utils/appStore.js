import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import FeedReducer from "./FeedSlice";
import ConnectionReducer from "./ConnectionSlice";
import RequestReducer from "./requestSlice";


const store=configureStore({
    reducer:{
        User:userReducer,
        Feed:FeedReducer,
        Connections:ConnectionReducer,
        Request:RequestReducer,
    }
})

export default store;
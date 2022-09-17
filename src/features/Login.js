import { createSlice } from "@reduxjs/toolkit";


const init = {
    isLogin: false
  };

export const loginSlice=createSlice({
    name:"login",
    initialState:{value:init},
    reducers:{

        loginAction:(state,action)=>{
            state.value=(action.payload);
        }

    }
})

export const {loginAction}=loginSlice.actions;
export default loginSlice.reducer;
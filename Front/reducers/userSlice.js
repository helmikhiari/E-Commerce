const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");


const initialState={
    firstName:null,
    lastName:null,
    email:null,
    isAuthenticated:false,
    loading:true,
    error:{}
}

const login=createAsyncThunk('user/login',async(credentials)=>{
    try
    {   
        const response=await axios.post(process.env.API_BASE+"user/login",credentials);
        return response;
    }
    catch(error)
    {

    }
})

const userSlice=createSlice({

    name:"user",
    initialState,
    extraReducers:(builder)=>
    {
        builder
        .addCase(login.fulfilled,(state,action)=>
        {   state.loading=false;
            if (action.payload.status==201)
            {
                state.isAuthenticated=true;
                localStorage.setItem('token',action.payload.data.token)
            }
            else 
            {
                state.error=action.payload.data.message;
            }
        })
        .addCase(login.rejected,(state,action)=>
        {
            state.error={message:"Login Failed"};
        }
        )
    }


})
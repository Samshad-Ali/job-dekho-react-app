import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

 export const getDataThunk=createAsyncThunk('/getData',async(query)=>{
    try {
        const url = `https://jsearch.p.rapidapi.com/search?query=${query}&page=1&num_pages=1`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c3e37a13a2mshc21222f9bf3d519p1d46c7jsnc8002ac466e7',
		'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
	}
};
const response = await fetch(url, options);
const result = await response.json();
console.log(result.data)
return result.data;
    } catch (error) {
        console.log(error)
    }
 })
const jobSlice=createSlice({
    name:"jobSlice",
    initialState:{
        data:[]
    },
    reducers:{
        particularData:(state,action)=>{
            state.data=state.data.filter(item=>item.job_id===action.payload)
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getDataThunk.fulfilled,(state,action)=>{
            state.data=action.payload;
        })
    }
})

export default jobSlice.reducer;
export const {particularData} = jobSlice.actions;
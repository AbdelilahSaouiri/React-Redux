import { createSlice } from '@reduxjs/toolkit'


const initialState={
   users: [
        {id:1, firstName:"abdelilah",lastName:"saouiri",age:21},
        {id:2, firstName:"sa",lastName:"fe",age:20},
        {id:3, firstName:"re",lastName:"rb",age:23}
    ],
    loading:true
}


const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{  // changer le state
        deleteUser: (state,{payload})=>{
        return {
            ...state,
            users:state.users.filter(user=>user.id!==payload)
        }

        }
    }
})

export const  {deleteUser}=userSlice.actions

export default userSlice.reducer
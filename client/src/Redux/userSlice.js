import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/users/';


export const getUsers = createAsyncThunk('user/getUsers',async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    console.log( 'from the slice',response.data)
    return response.data;
  
  } catch (error) {
    return error;
  }
}
);

export const updateUsers = createAsyncThunk('user/updateUser',async (data) => {
console.log('trying to update')
try {
  const response = await axios.put(`${API_URL}${data.id}`, data);
  console.log('redux state',response)
  return response.data;
} catch (error) {
  throw error;
}
}
);

export const deleteUsers = createAsyncThunk('user/deleteUser', async (id , { rejectWithValue }) => {
try {
    const response = await axios.delete(`${API_URL}${id}`);
    return response.data;
  } catch (error) {
    return rejectWithValue('Failed to fetch user.');
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    
    users: [],
  },
  reducers: {
   
    deleteUser: (state, action) => {
      const userId = action.payload;
      state.users = state.users.filter(user => user.id !== userId);
    },
    updateUser: (state, action) => {
      const updatedUser = action.payload; 
      const userIndex = state.users.findIndex(user => user.id === updatedUser.id);
      if (userIndex !== -1) {
        state.users[userIndex] = updatedUser;
      }
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload; 
    });
  },
});


export const { addUser, deleteUser, updateUser
} = userSlice.actions;

export default userSlice.reducer;

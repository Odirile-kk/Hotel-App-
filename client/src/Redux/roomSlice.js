import { createSlice } from "@reduxjs/toolkit";
import {  createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



// Async thunk for fetching a single room
export const fetchRoom = createAsyncThunk('room/fetchRoom', async (id , { rejectWithValue }) => {
  
  
  try {
      const response = await axios.get(`http://localhost:3000/api/rooms/${id }`);
      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to fetch room.');
    }
  });
  
  export const deleteRoom = createAsyncThunk('room/deleteRoom', async (id , { rejectWithValue }) => {
  
  
    try {
        const response = await axios.delete(`http://localhost:3000/api/rooms/${id}`);
        return response.data;
      } catch (error) {
        return rejectWithValue('Failed to fetch room.');
      }
    });

  export const fetchRooms = createAsyncThunk('room/fetchRooms', async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:3000/api/rooms/');
      return response.data;
   
    } catch (error) {
      return rejectWithValue('Failed to fetch rooms.');
    }
  });

  export const createRoom = createAsyncThunk('room/createRoom',async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/api/rooms/', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const updateRoom = createAsyncThunk('room/updateRoom',async (data) => {
  try {
    const response = await axios.put(`http://localhost:3000/api/rooms/${data.id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}
);



const roomSlice = createSlice({
    name: 'room',
    initialState: {
      rooms: [],
      currentRoom: null,
      loading: false,
      error: null,
    },
    reducers: {
      addRoom: (state, action) => {
        state.rooms = [...state.rooms, action.payload];
      },
      deleteRoomById: (state, action) => {
        const roomIdToDelete = action.payload;
        return state.rooms.filter(room => room.id !== roomIdToDelete);
      },
      findRoomById: (state, action) => {
        const { roomId } = action.payload;
        state.currentRoom = state.rooms.find((room) => room._id === roomId);
      },
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchRooms.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchRooms.fulfilled, (state, action) => {
            state.loading = false;
            state.rooms = action.payload;
          })
          .addCase(fetchRooms.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })



          .addCase(fetchRoom.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchRoom.fulfilled, (state, action) => {
            state.loading = false;
            state.currentRoom = action.payload;
          })
          .addCase(fetchRoom.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });

      },
    
   
  });
  
  export const { findRoomById, addRoom, deleteRoomById } = roomSlice.actions;
  export default roomSlice.reducer;
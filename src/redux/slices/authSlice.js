import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { loginApi, registerApi, updateUserApi, deleteAccountApi } from '../api/authApi';
import axios from 'axios';

// Async thunk action creators
export const loginUser = createAsyncThunk('user/post', async (credentials, { rejectWithValue }) => {

    const response = await fetch('http://192.168.100.33:3000/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      
      console.log("🚀 ~ loginUser ~ response:", response)
      const data = await response.json();      
      return data; 
  try {
    const response = await fetch('http://192.168.100.33:3000/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      
      console.log("🚀 ~ loginUser ~ response:", response)
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Something went wrong');
      
      return data; 
    // const response = await axios.post('http://192.168.100.33:3000/api/v1/login', credentials);
    // return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// export const register = createAsyncThunk('auth/register', async (userData, { rejectWithValue }) => {
//   try {
//     const response = await registerApi(userData);
//     return response.data;
//   } catch (error) {
//     return rejectWithValue(error.response.data);
//   }
// });

// export const updateUser = createAsyncThunk('auth/updateUser', async (userData, { rejectWithValue }) => {
//   try {
//     const response = await updateUserApi(userData);
//     return response.data;
//   } catch (error) {
//     return rejectWithValue(error.response.data);
//   }
// });

// export const deleteAccount = createAsyncThunk('auth/deleteAccount', async (userId, { rejectWithValue }) => {
//   try {
//     await deleteAccountApi(userId);
//     return userId;
//   } catch (error) {
//     return rejectWithValue(error.response.data);
//   }
// });

// Slice definition
const authSlice = createSlice({
  name: 'user123',
  initialState: {
    user: {},
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log(action.payload, "lkjkljh")
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Similarly, handle other async action types (register, updateUser, deleteAccount)
  },
});

export default authSlice.reducer;

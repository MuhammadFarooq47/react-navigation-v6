import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './slices/authSlice';
// Import other slice reducers here



// Create root reducer by combining all slice reducers
const rootReducer = combineReducers({
  authReducer,
  // Add other slice reducers here
});

export default rootReducer;

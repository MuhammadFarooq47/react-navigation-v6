import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import rootReducer from './rootReducer'; // assuming you have a root reducer combining all your slices
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from './slices/authSlice';

// Configuring Redux Persist
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // Optionally, you can specify which slices to persist and which not to
  // whitelist: ['auth'], // only 'auth' slice will be persisted
  // blacklist: ['someOtherSlice'], // 'someOtherSlice' will not be persisted
};


const persistedReducer = persistReducer(persistConfig, rootReducer);
// Configuring the store with middleware and enhancers
const store = configureStore({
  reducer: persistedReducer,
  // Optionally, you can provide additional middleware here
  // middleware: getDefaultMiddleware => getDefaultMiddleware(),
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // devTools: process.env.NODE_ENV === 'development', // Enable Redux DevTools only in development
});

// Persisting the Redux store
const persistor = persistStore(store);

export { store, persistor };

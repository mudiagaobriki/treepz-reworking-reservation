// import redux and persist plugins
import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { persistReducer } from 'reduxjs-toolkit-persist';
import storage from 'redux-persist/lib/storage';
import storageSession from 'reduxjs-toolkit-persist/lib/storage/session';
// import persistStore from 'redux-persist/es/persistStore';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore, persistReducer } from 'redux-persist';

// import theme reducers
import authReducer from './features/authSlice';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['auth'],
};

const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
        auth: authReducer,
    })
);
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
const persistedStore = persistStore(store);
export { store, persistedStore };

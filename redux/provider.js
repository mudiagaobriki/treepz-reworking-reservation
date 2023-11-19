'use client'

// cra imports
import React from 'react';

// import redux requirements
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistedStore } from './store';

export const ReduxProvider = ({children}) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistedStore}>
                {children}
            </PersistGate>
        </Provider>
    );
};

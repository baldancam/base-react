import { persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import persistedReducers from './modules/reduxPersist';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

// Crie a configuração para configureStore
const storeConfig = {
  reducer: persistedReducers(rootReducer), // Aplicando persistência ao rootReducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }).concat(sagaMiddleware),
};

// Configure a store usando configureStore do Redux Toolkit
const store = configureStore(storeConfig);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;

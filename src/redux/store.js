// import { configit initgit branch -M mainureStore } from '@reduxjs/toolkit'
import { createStore, combineReducers } from '@reduxjs/toolkit';
import { myItems } from './myItems/slice';
import { contactFilter } from './filter/slice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['items'],
};

const rootReducer = combineReducers({
    items: myItems.reducer,
    filter: contactFilter.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);



// export const store = configureStore({
//     reducer: {
//         contacts: [],
//         filter: ""
//     },
// })
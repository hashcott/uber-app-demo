import { configureStore } from '@reduxjs/toolkit'
import navReducer from './slices/navSilce'

export const store = configureStore({
    reducer: {
        nav: navReducer
    }
})
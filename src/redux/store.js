import { configureStore } from '@reduxjs/toolkit'
import userReducer from 'redux/user'
import {createLogger} from 'redux-logger'

const logger = createLogger()
export default configureStore({
    reducer: {
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
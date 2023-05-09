import { configureStore } from '@reduxjs/toolkit'
import userReducer from 'redux/user'
import {createLogger} from 'redux-logger'

const middlewares = []
if (process.env.NODE_ENV === 'development') {
    const logger = createLogger()
    middlewares.push(logger)
}

export default configureStore({
    reducer: {
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
})
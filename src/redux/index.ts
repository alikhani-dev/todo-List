import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import tasksSlice from './reducer/todoSlice'
import filterSlice from './reducer/filterSlice'

export type Color = 'secondary' | 'dark' | 'primary' | 'info' | 'success' | 'danger' | 'warning'
export type Actions = 'All' | 'Pending' | 'Complected'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const rootReducer = { tasks: tasksSlice, filter: filterSlice }

const store = configureStore({ reducer: rootReducer, devTools: process.env.NODE_ENV !== 'production' })

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store

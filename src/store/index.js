import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import booksReducer from './modules/books/reducer'

const reducers = combineReducers({
    books: booksReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))
export default store
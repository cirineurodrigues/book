import { booksTypes } from './actionsTypes'

const books = {
    data: {}
}

const booksReducer = (state = books, action) => {
    switch (action.type) {
        case booksTypes.GET_BOOKS:
            const {booksInfos} = action
            books.data = booksInfos
            return state

        default:
            return state
    }
}

export default booksReducer
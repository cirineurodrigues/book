import { booksTypes } from './actionsTypes'

export const getBooks = (booksInfos) => ({
    type: booksTypes.GET_BOOKS,
    booksInfos
})
import { getBooks } from './actions'
import {api} from '../../../services/api'

export const getBooksThunk = (page) => dispatch => {
    api
        .get(`books?page=${page}&amount=12`)
        .then((res) => {
            dispatch(getBooks(res.data))
        })
        .catch((error) => console.log(error))
}
import {Container} from './styles'

import BookCard from '../BookCard'
import Pagination from '../Pagination'

import {useSelector, useDispatch} from 'react-redux'
import {useState, useEffect} from 'react'
import {getBooksThunk} from '../../store/modules/books/thunk'

const BooksList = () => {
    const dispatch = useDispatch()
    const books = useSelector((state) => state.books.data)
    let [page, setPage] = useState(1)

    const nextPage = () => {
        if (page < Math.ceil(books.totalPages)) {
            setPage(page + 1)
        }
    }

    const previousPage = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    useEffect(() => {
        dispatch(getBooksThunk(page))
    }, [page])

    return (
        <>
            <Container>
                {
                    books.data?.map((cur, idx) => (<BookCard key={idx} book={cur}/>))
                }
            </Container>
            <Pagination previousPage={previousPage} nextPage={nextPage}/>
        </>
    )
}

export default BooksList
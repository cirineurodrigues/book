import {useState} from 'react'

import {Card} from './styles'

import BookModal from '../BookModal'

const BookCard = ({book}) => {
    const [showModal, setShowModal] = useState(false)

    const setModal = () => {
        setShowModal(!showModal)
    }

    return (
        <>
        <Card onClick={() => setModal()}>
            <div className="card__image">
                <img src={book.imageUrl} alt={`Capa do livro ${book.title}`} title={`Capa do livro ${book.title}`}/>
            </div>
            <div className="card__infos">
                <div>
                    <header>
                        <h2>{book.title}</h2>
                        <h3>{book.authors.join(', ')}</h3>
                    </header>
                    <div>
                        <p>{`${book.pageCount} Páginas`}</p>
                        <p>{book.publisher}</p>
                        <p>{`Publicado em ${book.published}`}</p>
                    </div>
                </div>
            </div>
        </Card>
        {showModal && <BookModal setModal={setModal} book={book}/>}
        </>
    )
}

export default BookCard

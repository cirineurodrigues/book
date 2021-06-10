import {useState} from 'react'

import {Card} from './styles'

import BookModal from '../BookModal'

const BookCard = () => {
    const [showModal, setShowModal] = useState(false)

    const setModal = () => {
        setShowModal(!showModal)
    }

    return (
        <>
        <Card onClick={() => setModal()}>
            <div>
            </div>
            <div>
                <h2>Livro Ioasys</h2>
                <h3>Autor Desconhecido</h3>
                <p>150 Páginas</p>
                <p>Editora Ioasys</p>
                <p>Publicado em 2020</p>
            </div>
        </Card>
        {showModal && <BookModal setModal={setModal}/>}
        </>
    )
}

export default BookCard

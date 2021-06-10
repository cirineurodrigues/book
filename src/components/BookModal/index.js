import { Container } from "./styles"

import {ImQuotesLeft} from 'react-icons/im'

const BookModal = ({setModal}) => {
    return (
        <Container>
            <button onClick={() => setModal()}>
                <div></div>
                <div></div>
            </button>
            <div className="modal__container">
                <div className="modal__image">
                </div>
                <div className="modal__infos">
                    <h2>Ioasys Livro</h2>
                    <h3>Autor Desconhecido, Desconhecido mesmo</h3>
                    <h4>Informações</h4>
                    <div>
                        <div>
                            <h5>Páginas</h5>
                            <span>304 páginas</span>
                        </div>
                        <div>
                            <h5>Editora</h5>
                            <span>Editora Loyola</span>
                        </div>
                        <div>
                            <h5>Publicação</h5>
                            <span>2020</span>
                        </div>
                        <div>
                            <h5>Idioma</h5>
                            <span>Inglês</span>
                        </div>
                        <div>
                            <h5>Título Original</h5>
                            <span>Change by Design</span>
                        </div>
                        <div>
                            <h5>ISBN-10</h5>
                            <span>000041516565</span>
                        </div>
                        <div>
                            <h5>ISBN-13</h5>
                            <span>165-65165161656</span>
                        </div>
                    </div>
                    <h4>Resenha da editora</h4>
                    <p>
                        <ImQuotesLeft/> The subject of “design thinking” is the rage at business schools, throughout corporations, and increasingly in the popular press—due in large part to the work of IDEO, a leading design firm, and its celebrated CEO, Tim Brown, who uses this book to show how the techniques and strategies of design belong at every level of business.
                    </p>
                </div>
            </div>
        </Container>
    )
}

export default BookModal
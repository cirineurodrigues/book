import { Container } from "./styles";

import { ImQuotesLeft } from "react-icons/im";

const BookModal = ({ setModal, book }) => {
  return (
    <Container>
      <button onClick={() => setModal()}>
        <div></div>
        <div></div>
      </button>
      <div className="modal__container">
        <div className="modal__image">
          <img
            src={book.imageUrl}
            alt={`Capa do livro ${book.title}`}
            title={`Capa do livro ${book.title}`}
          />
        </div>
        <div className="modal__infos">
          <h2>{book.title}</h2>
          <h3>{book.authors.join(", ")}</h3>
          <h4>Informações</h4>
          <div>
            <div>
              <h5>Páginas</h5>
              <span>{`${book.pageCount} Páginas`}</span>
            </div>
            <div>
              <h5>Editora</h5>
              <span>{book.publisher}</span>
            </div>
            <div>
              <h5>Publicação</h5>
              <span>{book.published}</span>
            </div>
            <div>
              <h5>Idioma</h5>
              <span>{book.language}</span>
            </div>
            <div>
              <h5>Título Original</h5>
              <span>{book.title}</span>
            </div>
            <div>
              <h5>ISBN-10</h5>
              <span>{book.isbn10}</span>
            </div>
            <div>
              <h5>ISBN-13</h5>
              <span>{book.isbn13}</span>
            </div>
          </div>
          <h4>Resenha da editora</h4>
          <p>
            <ImQuotesLeft /> {book.description}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default BookModal;

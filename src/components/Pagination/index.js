import { Container } from "./styles";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";

const Pagination = ({ previousPage, nextPage }) => {
  const books = useSelector((state) => state.books.data);

  return (
    <Container>
      <button onClick={() => previousPage()}>
        <IoIosArrowBack />
      </button>
      <p>
        Página <span>{books?.page}</span> de{" "}
        <span>{Math?.ceil(books.totalPages)}</span>
      </p>
      <button onClick={() => nextPage()}>
        <IoIosArrowForward />
      </button>
    </Container>
  );
};

export default Pagination;

import { Container } from "./styles";
import Validation from "../Validation";
import FormLogin from "../FormLogin";

import logo from "../../assets/logo.svg";

import { useState } from "react";

const FormContainer = () => {
  const [validation, setValidation] = useState(false);

  return (
    <Container>
      <header>
        <img src={logo} alt="Ioasys Logo" title="Ioasys Logo" />
        <span>Books</span>
      </header>
      <div>
        <FormLogin setValidation={setValidation} />
        {validation && <Validation />}
      </div>
    </Container>
  );
};

export default FormContainer;

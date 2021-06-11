import FormContainer from "../../components/FormContainer";
import { Container } from "./styles";

import { Redirect } from "react-router-dom";

const Login = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <Container>
      <FormContainer />
    </Container>
  );
};

export default Login;

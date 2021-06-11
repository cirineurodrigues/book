import { Container } from "./styles";

import HomeHeader from "../../components/HomeHeader";
import BooksList from "../../components/BooksList";

import { Redirect } from "react-router-dom";

const Home = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <HomeHeader />
      <BooksList />
    </Container>
  );
};

export default Home;

import { Container } from "./styles";
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = ({ loading }) => {
  return (
    <Container>
      <ClipLoader loading={loading} color={"#fff"} size={25} />
    </Container>
  );
};

export default Spinner;

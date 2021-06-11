import { Header } from "./styles";

import logo_black from "../../assets/logo_black.svg";
import { FiLogOut } from "react-icons/fi";

const HomeHeader = () => {
  const name = localStorage.getItem("name");

  return (
    <Header>
      <h1>
        <img src={logo_black} alt="Ioasys Logo" title="Ioasys Logo" />
        <span>Books</span>
      </h1>
      <div>
        <p>
          Bem vindo, <span>{name}</span>
        </p>
        <button
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          <FiLogOut />
        </button>
      </div>
    </Header>
  );
};

export default HomeHeader;

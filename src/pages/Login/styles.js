import styled from "styled-components";

import background_image from "../../assets/background_image.png";

export const Container = styled.main`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${background_image}) no-repeat center;
  background-size: cover;

  @media screen and (min-width: 768px) {
    justify-content: left;
  }

  @media screen and (min-width: 1365px) {
    padding: 0 calc((100vw - 1365px) / 2);
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 368px;
  padding: 16px;
  box-sizing: content-box;

  header {
    margin-bottom: 50px;
    display: flex;
    align-items: center;

    img {
      margin-right: 16px;
    }

    span {
      color: #fff;
      font-size: 1.75rem;
      font-weight: 300;
    }
  }

  > div {
    position: relative;
  }

  @media screen and (min-width: 768px) {
    padding: 115px;
  }
`;

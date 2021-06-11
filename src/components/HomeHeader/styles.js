import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 42px 0;

  > h1 {
    display: flex;
    align-items: center;

    img {
      margin-right: 16px;
    }

    span {
      font-size: 1.75rem;
      font-weight: 300;
    }
  }

  > div {
    display: flex;
    align-items: center;

    p {
      margin-right: 25px;
      display: none;
      font-weight: 400;

      span {
        font-weight: 500;
      }
    }

    button {
      width: 32px;
      height: 32px;
      border: 1px solid rgba(51, 51, 51, 0.2);
      border-radius: 100%;
      position: relative;
      font-size: 20px;
      background: transparent;
      cursor: pointer;

      svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  @media screen and (min-width: 624px) {
    > div {
      p {
        display: block;
      }
    }
  }
`;

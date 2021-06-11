import styled from "styled-components";

export const StyledForm = styled.form`
  > div {
    padding: 8px 16px;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.32);
    :nth-of-type(2) {
      position: relative;
    }
    label {
      display: block;
      color: #fff;
      opacity: 0.5;
      font-size: 0.75rem;
    }
    input {
      width: 100%;
      border: none;
      color: #fff;
      background: transparent;
      outline: none;
    }
    button {
      padding: 8px 20px;
      border: none;
      border-radius: 44px;
      position: absolute;
      top: 50%;
      right: 16px;
      transform: translateY(-50%);
      color: #b22e6f;
      background-color: #fff;
      cursor: pointer;
    }
  }

  > p {
    height: 16px;
    font-size: 0.75rem;
    color: #fff;
    line-height: 16px;
  }
`;

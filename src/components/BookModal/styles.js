import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);

  > button {
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 100%;
    position: absolute;
    top: 16px;
    right: 16px;
    background-color: #fff;
    cursor: pointer;

    :hover {
      > div {
        :nth-of-type(1) {
          transform: translate(-50%, -50%) rotate(-45deg);
        }

        :nth-of-type(2) {
          transform: translate(-50%, -50%) rotate(45deg);
        }
      }
    }

    div {
      width: 12px;
      height: 1px;
      position: absolute;
      top: 50%;
      left: 50%;
      background-color: #000;

      :nth-of-type(1) {
        transition: 0.3s;
        transform: translate(-50%, -50%) rotate(45deg);
      }

      :nth-of-type(2) {
        transition: 0.3s;
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
  }

  .modal__container {
    max-height: calc(100vh - 80px);
    padding: 24px;
    margin-top: 40px;
    background-color: #fff;
    overflow-y: scroll;

    .modal__image {
      width: 240px;
      height: 351px;
      margin: 0 auto 24px;
      background-color: #cecece;
      filter: drop-shadow(0px 11.9008px 17.8512px rgba(0, 0, 0, 0.3));

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        vertical-align: middle;
      }
    }
    .modal__infos {
      h2 {
        font-size: 1.75rem;
        font-weight: 500;
        line-height: 40px;
      }
      h3 {
        margin-bottom: 32px;
        color: #ab2680;
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 20px;
      }
      h4 {
        margin-bottom: 16px;
        font-size: 0.75rem;
        font-weight: 500;
        line-height: 20px;
        text-transform: uppercase;
      }
      > div {
        margin-bottom: 24px;
        > div {
          display: flex;
          justify-content: space-between;
          h5 {
            font-size: 0.75rem;
            font-weight: 500;
            line-height: 20px;
          }
          span {
            color: #999999;
            font-size: 0.75rem;
            font-weight: 400;
            line-height: 20px;
          }
        }
      }
      p {
        max-width: 240px;
        color: #999999;
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 20px;
        svg {
          margin-right: 8px;
          font-size: 1rem;
        }
      }
    }
  }

  @media screen and (min-width: 420px) {
    > div {
      margin-top: 0;
    }
  }

  @media screen and (min-width: 801px) {
    .modal__container {
      max-height: none;
      padding: 48px;
      padding-right: 0;
      overflow-y: hidden;

      > div {
        display: inline-block;
        font-size: 0;
      }

      .modal__image {
        width: 349px;
        height: 512px;
        margin-right: 48px;
        margin-bottom: 0;
      }

      .modal__infos {
        width: 324px;
        height: 512px;
        padding-right: 48px;
        overflow-y: scroll;
        vertical-align: top;
        p {
          max-width: 100%;
        }
      }
    }
  }
`;

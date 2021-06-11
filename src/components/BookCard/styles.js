import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  max-width: 288px;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  cursor: pointer;

  &:hover {
    transition: 0.3s;
    box-shadow: 0px 16px 80px rgba(84, 16, 95, 0.32);
  }

  > div {
    display: inline-block;
    font-size: 0;
  }

  .card__image {
    width: 81px;
    height: 122px;
    margin-right: 16px;
    vertical-align: middle;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .card__infos {
    max-width: 159px;
    vertical-align: top;

    > div {
      display: flex;
      height: 122px;
      flex-direction: column;
      justify-content: space-between;

      header {
        h2 {
          font-size: 0.875rem;
          font-weight: 500;
          line-height: 16px;
        }

        h3 {
          font-size: 0.75rem;
          font-weight: 400;
          line-height: 16px;
          color: #ab2680;
        }
      }

      div {
        p {
          font-size: 0.75rem;
          line-height: 16px;
          color: #999999;
        }
      }
    }
  }

  @media screen and (min-width: 592px) {
    max-width: 272px;

    .card__infos {
      max-width: 143px;
    }
  }
`;

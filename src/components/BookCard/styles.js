import styled from 'styled-components'

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

        :nth-of-type(1) {
            width: 81px;
            height: 122px;
            margin-right: 16px;
            background: #cecece;
        }

        h2 {
            font-size: 0.875rem;
            font-weight: 500;
            line-height: 20px;
        }

        h3 {
            margin-bottom: 30px;
            font-size: 0.75rem;
            font-weight: 400;
            line-height: 20px;
            color: #AB2680;
        }

        p {
            font-size: 0.75rem;
            line-height: 20px;
            color: #999999;
;
        }
    }
`
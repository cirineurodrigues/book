import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    padding-bottom: 16px;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        width: 32px;
        height: 32px;
        border: 1px solid rgba(51, 51, 51, 0.2);
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #333333;
        background-color: transparent;
        cursor: pointer;
    }

    p {
        margin: 0 16px;
        font-size: 0.75rem;
        font-weight: 400;

        span {
            font-weight: 500;
        }
    }

    @media screen and (min-width: 592px) {
        justify-content: flex-end;

        button {
            :nth-of-type(1) {
                margin-right: 8px;
            }
        }

        p {
            order: -1;
        }
    }
`
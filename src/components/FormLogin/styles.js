import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: 368px;
    padding: 1rem;
    box-sizing: content-box;

    header {
        margin-bottom: 50px;
        display: flex;
        align-items: center;

        img {
            margin-right: 1rem;
        }

        span {
            color: #fff;
            font-size: 1.75rem;
            font-weight: 300;
        }
    }

    form {
        div {
            padding: 1rem;
            border-radius: 4px;
            margin-bottom: 1rem;
            background-color: rgba(0, 0, 0, 0.32);

            :nth-child(2) {
                position: relative;
            }

            label {
                display: block;
                color: #fff;
                opacity: 0.5;
                font-size: 0.5rem;
            }

            input {
                border: none;
                color: #fff;
                background: transparent;
            }

            button {
                padding: 8px 20px;
                border: none;
                border-radius: 44px;
                position: absolute;
                top: 50%;
                right: 1rem;
                transform: translateY(-50%);
                color: #B22E6F;
                background-color: #fff;
            }
        }
    }

    @media screen and (min-width: 768px) {
        padding: 115px;
    }
`
import styled from 'styled-components'

import background_image from '../../assets/background_image.png'

export const Container = styled.section`
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${background_image});
    background-size: cover;
    background-position: center;

    @media screen and (min-width: 768px) {
        justify-content: left;
    }
`
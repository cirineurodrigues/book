import styled from 'styled-components'

import list_background1 from '../../assets/list_background1.png'
import list_background2 from '../../assets/list_background2.png'

export const Container = styled.main `
    width: 100vw;
    min-height: 100vh;
    padding: 0 16px;
    background: url(${list_background1}), url(${list_background2}) repeat center;
    background-size: cover;
    background-blend-mode: darken;

    @media screen and (min-width: 624px) {
        padding: 0 calc((100vw - 592px) / 2);
    }

    @media screen and (min-width: 928px) {
        padding: 0 calc((100vw - 896px) / 2);
    }

    @media screen and (min-width: 1232px) {
        padding: 0 calc((100vw - 1200px) / 2);
    }
`
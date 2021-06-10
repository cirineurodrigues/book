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

    @media screen and (min-width: 592px) {
        padding: 0 calc((100vw - 560px) / 2);
    }

    @media screen and (min-width: 880px) {
        padding: 0 calc((100vw - 848px) / 2);
    }

    @media screen and (min-width: 1168px) {
        padding: 0 calc((100vw - 1136px) / 2);
    }
`
import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 624px) {
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`
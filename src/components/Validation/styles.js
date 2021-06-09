import styled from 'styled-components'

export const WarningBox = styled.div`
    position: absolute;

    > div {
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 8px solid rgba(255, 255, 255, 0.4);
        transform: translateX(16px);
    }

    p {
        padding: 16px;
        border-radius: 4px;
        color: #fff;
        font-size: 0.9rem;
        font-weight: 700;
        background-color: rgba(255, 255, 255, 0.4);
    }
`
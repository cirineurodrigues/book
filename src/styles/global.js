import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    html, body, div, span, main, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub,sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed,  figure, figcaption, footer, header, hgroup,  menu, nav, output, ruby, section, summary, time, mark, audio, video {
        padding: 0;
        border: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font: 16px Heebo, sans-serif;
    }

    body {
        width: 100vw;
        max-width: 100%;
        overflow-x: hidden;
    }
`;

import { createGlobalStyle } from 'styled-components';
import '@fontsource/inter';
import '@fontsource/inter/600.css';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${(props) => props.theme.fonts.inter};
    }
    
    html, body, #root {
        height: 100%;
        overflow-x: hidden;
        background-color: ${(props) => props.theme.colors.baseLightest};
    }
`;

export default GlobalStyles;

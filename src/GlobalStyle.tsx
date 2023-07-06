import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'
const GlobalStyle = createGlobalStyle`
 ${reset};
 
 :root {
  --color-primary: #ddd6fe;
  --color-accent: #88f6e4;
  --color-white: #fff;
  --color-black: #000;
  --color-bg: #f4f4f4;
  --color-gray-ddd: #ddd;
  --color-tab-active: #8267f7;
 }
 
  
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    // TODO : 폰트 수정 필요
    font-family: "Helvetica", "Arial", sans-serif;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`

export default GlobalStyle

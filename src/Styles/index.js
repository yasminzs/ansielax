import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;

}

body{
  ::-webkit-scrollbar { 
	display: none;
  }
}

button, span, p, label,h1,h3,h2,ul{
  font-family: 'Ubuntu Condensed', sans-serif;
  letter-spacing: 1.1px;
  }

  button {
    cursor: pointer;
  }
`
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');
*{
    margin : 0;
padding:0;
outline:0;
box-sizing: border-box;
}

html, body, #root{
  height:100%
}
body {
  margin: 0;
  background:#ecf1f8;
  color:#333;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
ul{
    list-style : none;
}
`
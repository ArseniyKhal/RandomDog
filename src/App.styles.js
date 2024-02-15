import { styled, createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@font-face {
	font-family: "StratosSkyeng";
	font-weight: 400;
	font-style: normal;
	font-display: swap;
	src: local("StratosSkyeng"), local("StratosSkyeng"),
		url("/fonts/StratosSkyeng.woff2") format("woff2"),
		url("/fonts/StratosSkyeng.woff") format("woff");
}
@font-face {
	font-family: "Roboto";
	font-weight: 400;
	font-style: normal;
	font-display: swap;
	src: local("Roboto-Regular"), local("Roboto-Regular"),
		url("/fonts/Roboto-Regular.woff2") format("woff2"),
		url("/fonts/Roboto-Regular.woff") format("woff"),
		url("/fonts/Roboto-Regular.ttf") format("ttf");
}

* {
	margin: 0;
	padding: 0;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	}
*:before,
*:after {
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
a,
a:visited {
	text-decoration: none;
	font-family: 'Roboto', sans-serif;
	cursor: pointer;
	decoration: none;
	color: inherit;
}
ul li {
	list-style: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
	font-style: normal;
	font-weight: 400;
}
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px white inset !important;
}

::-webkit-scrollbar {
	width: 6px;
  }
 ::-webkit-scrollbar-track {
	background: #FFF;

 }
 ::-webkit-scrollbar-thumb {
	background-color: #D9D9D9;
	border-radius: 10px;
 }

html, body {
	font-family: 'Roboto', sans-serif;
	color: #fff;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
   user-select: none;
	scrollbar-width: thin;
	scrollbar-color:  #D9D9D9 #FFF;
}
`

export const Wrapper = styled.div`
  background-color: #eee;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`
export const Container = styled.div`
  max-width: 1190px;
  padding: 0 15px;
  margin: 0 auto;
`
export const Header = styled.header`
  width: 100%;
  font-size: 30px;

  text-align: center;
`
export const HeaderTitle = styled.h1`
  background-color: coral;
`
export const Main = styled.main``
export const DogList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 10px;
  background-color: rgb(68, 199, 68);
  padding: 10px;
`

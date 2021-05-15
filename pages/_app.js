import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html,
  body {
    height: 100%;
    position: relative;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;  
  }

  #__next {
    display: flex;
    flex-flow: column;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6, p {
      margin: 0;
      padding: 0;
  }`;

const theme = {
  colors: {
    primary: "#ffffff",
    secondary: "#000000",
    lightGrey: "#cccccc",
  },
  border: {
    radius: "5px",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

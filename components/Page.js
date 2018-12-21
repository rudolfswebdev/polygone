import React, {Component} from 'react';
import styled ,{ThemeProvider,createGlobalStyle} from 'styled-components';
import Header from './Header';
import Meta from './Meta';

//theme ir tā kā global style variables
const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offwhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0,0,0,0.09)'
};

//styled components
const StyledPage = styled.div `
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;
//injectGlobal sets the overall global styles like fonts, font-face, initial font size and so on.
const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *,*:before,*:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

class Page extends Component {
  render() {
    return (
      //themeProvider ir kā ContextAPI, app tiek ietīta ThemeProvider, lai visiem child elementiem būtu pieejams theme.

      <ThemeProvider theme={theme}>
        <StyledPage >
          <Meta/>
          <Header/>
          <GlobalStyle/>
          <Inner>
            {this.props.children}
          </Inner>
        </StyledPage>
      </ThemeProvider>

    );
  }
}

export default Page;
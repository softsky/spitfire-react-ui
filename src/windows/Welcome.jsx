import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import styled from 'react-emotion';
import Header from '../components/Header';
import Welcome from '../components/Pages/Welcome';
import colors from '../constants/colors';


const Container = styled('div')`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const WelcomeWindow = () => (
  <ThemeProvider theme={colors}>
    <Container>
      <Header />
      <Welcome />
    </Container>
  </ThemeProvider>
);

export default WelcomeWindow;

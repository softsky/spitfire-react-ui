import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import styled from 'react-emotion';


const Container = styled('div')`
  background: #1a1c24;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'MontserratBold';
  -webkit-user-select: none;
  -webkit-app-region: drag;
`;

const Title = styled('span')`
  color: #ffffff;
  margin: 0;
`;

const Actions = styled('div')`
  position: absolute;
  right: 15px;
  color: ${color => color.theme.primaryTextColor};

  >* {
    margin-left: 15px;
    transition: color .3s;
    font-size: 14px;

    &:hover {
      color: #ffffff;
    }
  }
`;

class Header extends Component {
  // eslint-disable-next-line
  get focusedWindow() {
    // eslint-disable-next-line
    const { remote } = window.require('electron');
    return remote.BrowserWindow.getFocusedWindow();
  }

  handleMinimize = () => {
    this.focusedWindow.minimize();
  }

  handleClose = () => {
    this.focusedWindow.close();
  }

  render() {
    return (
      <Container>
        <Title>
          Spitfire
        </Title>
        <Actions>
          <FontAwesome name="window-minimize" onClick={this.handleMinimize} />
          <FontAwesome name="cog" />
          <FontAwesome name="close" onClick={this.handleClose} />
        </Actions>
      </Container>
    );
  }
}


export default Header;

/* eslint-disable global-require */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import styled from 'react-emotion';
import { flow } from 'lodash/fp';
import withLicense from '../../../containers/withLicense';
import Logo from '../../UI/Logo';


const Container = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Body = styled('div')`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 130px;
  background-color: #292d3d;
  background-image: url(${require('./img/background.png')});
  background-position: center;
  background-size: 104%;
  background-repeat: no-repeat;
`;

const Title = styled('h1')`
  font-family: 'MontserratBold';
  font-size: 63px;
  color: ${props => props.theme.titleTextColor}; 
`;

const Footer = styled('div')`
  display: flex;
  height: 95px;
  justify-content: center;
  align-items: center;
`;

const LicenseLabel = styled('span')`
  position: relative;
  font-family: 'MontserratMedium';
  font-size: 16px;
  color: ${props => props.theme.titleTextColor};
`;

const LicenseInput = styled('input')`
  font-family: 'MontserratBold';
  font-size: 16px;
  color: ${props => props.theme.red};
  border: 1px solid #8d8e93;
  border-radius: 50px;
  background: transparent;
  padding: 10px 20px 10px 45px;
  margin-left: 20px;
  outline: none;
`;

const ErrorMessage = styled('p')`
  display: ${props => (props.show ? 'block' : 'none')};
  font-family: 'MontserratMedium';
  font-size: 16px;
  color: ${props => props.theme.red};
`;

const Icon = styled(FontAwesome)`
  position: absolute;
  right: -55px;
  top: 1px;
  font-size: 18px;
  color: #8d8e93;
`;

const Spinner = styled(FontAwesome)`
  display: ${props => (props.show ? 'block' : 'none')};
  font-size: 45px;
  color: #ffffff;
  animation: loading 3s linear infinite;
  
  @keyframes loading {
    0% { transform: rotate(0); }
    100% { transform: rotate(360deg); }
  }
`;

class Welcome extends Component {
  static propTypes = {
    license: PropTypes.shape({
      error: PropTypes.any,
      actions: PropTypes.shape({
        validateLincese: PropTypes.func.isRequired,
      }),
    }).isRequired,
  }

  state = {
    handleError: false,
  }

  validateLincene = ({ keyCode, target }) => {
    const { license } = this.props;

    if (keyCode === 13) {
      license.actions.validateLincese(target.value);
      this.setState({ handleError: true });
    }
  }

  render() {
    const { license } = this.props;
    const { error, isFetching } = license;
    const { handleError } = this.state;

    return (
      <Container>
        <Body>
          <Logo
            height="165px"
            width="195px"
          />
          <Title>
            Hello
          </Title>
          <ErrorMessage show={!!error && handleError}>
            Please enter valid product key
          </ErrorMessage>
          <Spinner name="spinner" show={isFetching} />
        </Body>
        <Footer>
          <LicenseLabel>
            Enter your License Key:
            <Icon name="check-square-o" />
          </LicenseLabel>
          <LicenseInput
            onKeyUp={this.validateLincene}
            placeholder="XXXX-XXXX-XXXX-XXXX"
          />
        </Footer>
      </Container>
    );
  }
}

export default flow([
  withLicense,
])(Welcome);

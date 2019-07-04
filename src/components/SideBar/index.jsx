/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import MenuItem from './MenuItem';
import Logo from '../UI/Logo';


const Container = styled('div')`
  width: 240px;
  background: url(${require('./img/side-bar.png')});
  background-size: 107%;
  background-repeat: no-repeat;
  background-position: -17px 0;
  display: flex;
  flex-direction: column;
  flex-shrink: 0
`;

const Footer = styled('div')`
  margin-top: auto;
  margin-bottom: 18px;
  padding-left: 30px;
  color: #5a607b;
  font-size: 9pt;
`;

const Status = styled('p')`
  font-family: 'MontserratBold';
  font-size: 10pt;
  font-weight: bold;
  color: #161720;

  span {
    font-family: 'MontserratMedium';
    color: #ffffff;
    font-weight: normal;
  }
`;

const Updates = styled('p')`
  margin: 0;
  font-family: 'MontserratMedium';
`;

const FAQ = styled('span')`
  border-left: 2px solid #161720;
  margin-left: 8px;
  padding-left: 8px;
`;

const StyledLogo = styled(Logo)`
  margin: 45px auto 55px;
`;

const SideBar = ({ items }) => (
  <Container>
    <StyledLogo
      height="81px"
      width="100px"
    />
    { items.map(item => <MenuItem {...item} key={item.path} />) }
    <Footer>
      <Status>
        STATUS:
        {' '}
        <span>
          Authenticated
        </span>
      </Status>
      <Updates>
        Check for updates
        {' '}
        <FAQ>
          FAQ
        </FAQ>
      </Updates>
    </Footer>
  </Container>
);

SideBar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
  })).isRequired,
};

export default SideBar;

import React from 'react';
import styled, { css } from 'react-emotion';
import Button from '../../UI/Button';


const containerCss = css`
  display: flex;
  padding: 0 5px;
  align-items: center;
  height: 80px;
  user-select: none;
`;

const titleCss = css`
  font-family: 'MontserratMedium';
  font-size: 23px;
  color: #ffffff;
  margin: 0;
  flex: 1;
`;

const Icon = styled('i')`
  background: #ee504c;
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: relative;
  top: 2px;
  margin: 0px 10px 0 30px;
`;

const Header = () => (
  <div className={containerCss}>
    <p className={titleCss}>
      <Icon /> Upcomming Release
    </p>
    <Button onClick={() => null}>
      Refresh
    </Button>
  </div>
);

export default Header;

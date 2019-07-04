/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';


const Container = styled('div')(({ isActive, theme }) => `
  background: ${isActive ? theme.red : 'transparent'};
  background-image: ${isActive ? `url(${require('./img/border.png')})` : 'none'};
  background-position: 49% 53%;
  background-repeat: no-repeat;
  color: ${isActive ? '#ffffff' : '#cad0ef'};
  border-radius: 5px;
  margin: 0 30px;
  width: calc(25% - 60px);
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: ${isActive ? '20px 0' : '25px 0 30px'};
  box-sizing: border-box;
  font-size: 12.5px;
  transition: background 0.2s;
`);

const dateCss = css`
  margin: 0;
  font-family: 'MontserratMedium';
`;

const Name = styled('span')(({ isActive, theme }) => `
  color: ${isActive ? '#ffffff' : theme.red};
  margin: ${isActive ? '0 0 20px' : '0 0 15px'};
  font-family: 'MontserratBold';
`);

const Sku = styled('span')(({ isActive }) => `
  font-family: 'MontserratSemiBold';
  margin: ${isActive ? '25px 0 0' : '15px 0 0'};
  padding: 0 5px;
  text-align: center;
`);

const SkuTitle = styled('span')(({ isActive, theme }) => `
  color: ${isActive ? '#292c3b' : theme.red};
`);

const Price = styled('p')(({ isActive, theme }) => `
  background: ${isActive ? '#292c3b' : theme.red};
  color: #ffffff;
  position: absolute;
  right: -13px;
  top: 6px;
  padding: 4px 10px;
  border-radius: 5px;
  margin: 0px;
  font-family: 'MontserratBold';
`);

const Image = styled('div')(({ src, theme }) => `
  color: ${theme.red};
  height: 136px;
  width: 136px;
  background: url(${src});
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  position: relative;
`);

const ReleaseItem = (props) => {
  const {
    id,
    date,
    name,
    sku,
    price,
    image,
    onClick,
    isActive,
  } = props;

  return (
    <Container isActive={isActive} onClick={() => onClick(id, sku)}>
      <p className={dateCss}>{ date }</p>
      <Name isActive={isActive}>{ name }</Name>
      <Image src={image}>
        <Price isActive={isActive}>{price}</Price>
      </Image>
      <Sku isActive={isActive}>
        <SkuTitle isActive={isActive}>SKU: </SkuTitle> { sku }
      </Sku>
    </Container>
  );
};

ReleaseItem.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  sku: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default ReleaseItem;

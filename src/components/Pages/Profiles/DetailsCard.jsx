import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Card from '../../UI/Card';
import Title from './DetailsTitle';


const StyledCard = styled(Card)`
  flex: 1;
  margin: 7px;
`;

const DetailsCard = ({ children, titleIcon, title }) => (
  <StyledCard>
    <Title icon={titleIcon}>
      { title }
    </Title>
    { children }
  </StyledCard>
);

DetailsCard.propTypes = {
  children: PropTypes.node.isRequired,
  titleIcon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default DetailsCard;

import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import FontAwesome from 'react-fontawesome';
import styled from 'react-emotion';


function getBg(props) {
  if (props.light) { return 'transparent'; }

  return props.primary
    ? props.theme.buttonPrimaryBg
    : props.theme.buttonSecondaryBg;
}

function getColor(props) {
  return props.primary
    ? props.theme.buttonPrimaryColor
    : props.theme.buttonSecondaryColor;
}

function getBorder(props) {
  const borderColor = props.primary
    ? props.theme.buttonPrimaryBg
    : props.theme.buttonSecondaryBg;

  return props.light
    ? `2px solid ${borderColor}`
    : 'none';
}

function getPadding(props) {
  return props.light
    ? '5px 8px;'
    : '7px 10px;';
}

const StyledButton = styled('a')`
  font-family: 'MontserratBold';
  font-size: 10px;
  cursor: pointer;
  color: ${props => getColor(props)};
  padding: ${props => getPadding(props)};
  border-radius: 50px;
  border: ${props => getBorder(props)};
  background: ${props => getBg(props)};
  transition: opacity .2s;
  user-select: none;
  text-transform: uppercase;

  &:hover {
    opacity: .7;
    transform: translateZ(0);
  }
`;

const Icon = styled(FontAwesome)`
  margin-right: 5px;
`;

const Button = (props) => {
  const {
    children,
    onClick,
    className,
    icon,
    ...rest
  } = props;

  return (
    <StyledButton onClick={onClick} className={className} {...rest}>
      { icon && <Icon name={icon} />}
      { children }
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.string,
};

Button.defaultProps = {
  className: null,
  icon: null,
  onClick: noop,
};

export default Button;

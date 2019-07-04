import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';


const StyledInput = styled('input')`
  color: #cad0ef;
  box-sizing: border-box;
  padding: 8px 12px;
  font-size: 12.5px;
  font-family: 'MontserratMedium';
  border: none;
  outline: none;
  background: transparent;
  border-bottom: 2px solid ${props => props.theme.red};
  width: ${props => props.width || '100%'};
  transition: background .2s;

  ::placeholder {
    color: #cad0ef;
  }

  &:focus {
    background: ${props => props.theme.red};
    border-color: #ffffff;
    color: #ffffff;

    ::placeholder {
      color: #ffffff;
    }
  }
`;

const Input = ({ onChange, value, ...props }) => (
  <StyledInput
    onChange={e => onChange(e.target.value)}
    value={value}
    {...props}
  />
);

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

Input.defaultProps = {
  value: '',
};


export default Input;

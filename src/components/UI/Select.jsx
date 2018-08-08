import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';


const StyledSelect = styled('select')`
  color: #cad0ef;
  box-sizing: border-box;
  padding: 8px 12px;
  font-size: 12.5px;
  font-family: 'MontserratMedium';
  border: none;
  outline: none;
  background: transparent;
  border-bottom: 2px solid ${props => props.theme.red};
  border-radius: 0;
  -webkit-appearance: none;
  width: ${props => props.width || '100%'};
  transition: background .2s;
`;

const Select = ({
  onChange,
  value,
  options,
  title,
  ...props
}) => (
  <StyledSelect
    onChange={e => onChange(e.target.value)}
    value={value}
    {...props}
  >
    <option key="title">
      { title }
    </option>
    {
      options.map(option => (
        <option key={option.key}>
          { option.label }
        </option>
      ))
    }
  </StyledSelect>
);

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    label: PropTypes.string,
  })),
};

Select.defaultProps = {
  value: null,
  options: [],
};


export default Select;

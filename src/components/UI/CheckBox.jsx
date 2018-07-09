import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';


const Input = styled('input')`
  display: none;

  + span {
    display: inline-block;
    position: relative;
    right: 12px;
    width: 12px;
    height: 12px;
    margin: -1px 0px 0 0;
    vertical-align: middle;
    border: ${props => `2px solid ${props.theme.red}`};
    border-radius: 4px;
    cursor: pointer;
    margin-right: 4px;
    cursor: pointer;
  }

  &:checked + span:after {
    content: '';
    display: block;
    content: '';
    display: block;
    width: 4px;
    height: 5px;
    transform: rotate(45deg);
    border-bottom: ${props => `2px solid ${props.theme.red}`};
    border-right: ${props => `2px solid ${props.theme.red}`};
    position: absolute;
    right: 3px;
    top: 1px;
  }
`;

const Label = styled('label')`
  padding: 8px 12px; 
  font-size: 12.5px;
  color: #cad0ef;
  user-select: none;
`;

const LabelText = styled('span')`
  position: relative;
  right: 12px;
  cursor: pointer;
`;

const CheckBox = ({
  label,
  onChange,
  checked,
  className,
}) => (
  <Label className={className}>
    <Input onChange={e => onChange(e.target.checked)} type="checkbox" checked={checked} />
    <span />
    <LabelText> { label } </LabelText>
  </Label>
);

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  className: PropTypes.string,
};

CheckBox.defaultProps = {
  className: '',
  checked: false,
};

export default CheckBox;

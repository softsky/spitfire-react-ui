import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';


const Heading = styled('div')`
  color: #ffffff;
  display: flex;
  border-bottom: ${props => `2px solid ${props.theme.red}`};
  width: 100%;
  font-family: 'MontserratSemiBold';
  font-size: 13px;
`;

const Body = styled('div')`
  background: linear-gradient( 
    white 50%, 
    transparent 50%);
  background-size: 2em 2em;
  background-color: black;
`;

const Row = styled('div')`
display: flex;
  color: ${props => props.theme.primaryTextColor};
  width: 100%;
  font-family: 'MontserratMedium';
  font-size: 12.5px;
`;

const Column = styled('div')`
  min-height: 32px;
  padding: 0 5px;
  box-sixing: border-box;
  width: ${props => props.width};
  flex: ${props => (props.width ? 'initial' : 1)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Table = ({ data, columns }) => (
  <React.Fragment>
    <Heading>
      {
        columns.map(col => (
          <Column key={col.key} width={col.width}>
            {col.title}
          </Column>
        ))
      }
    </Heading>
    <Body>
      {
        data.map(item => (
          <Row>
            {
            columns.map(col => (
              <Column key={col.key} width={col.width}>
                {item[col.key]}
              </Column>
            ))
            }
          </Row>
        ))
      }
    </Body>
  </React.Fragment>
);

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({

  })).isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    width: PropTypes.string,
    title: PropTypes.string,
  })).isRequired,
};

export default Table;

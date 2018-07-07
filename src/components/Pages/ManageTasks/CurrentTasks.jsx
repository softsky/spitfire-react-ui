import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Table from '../../UI/Table';
import GlobalActions from './GlobalActions';

const Container = styled('div')`
  padding: 25px;
  font-family: 'MontserratMedium';
  flex: 1;
`;

const Title = styled('p')`
  color: #ffffff;
  text-align: left;
  font-size: 23px;
  margin: 0 0 30px 0;
`;

const columns = [
  {
    title: 'ID',
    key: 'id',
    width: '5%',
  },
  {
    title: 'Size',
    key: 'size',
    width: '15%',
  },
  {
    title: 'SKU/URL',
    key: 'sku',
    width: '10%',
  },
  {
    title: 'Email',
    key: 'email',
    width: '25%',
  },
  {
    title: 'Profile',
    key: 'profile',
    width: '15%',
  },
  {
    title: 'Status',
    key: 'status',
    width: '15%',
  },
  {
    title: 'Action',
    width: '15%',
  },
];

const CurrentTasks = ({ tasks }) => (
  <Container>
    <Title>Current Tasks</Title>
    <GlobalActions />
    <Table columns={columns} data={tasks.data} />
  </Container>
);

CurrentTasks.propTypes = {
  tasks: PropTypes.shape({
    data: PropTypes.array,
  }).isRequired,
};

export default CurrentTasks;

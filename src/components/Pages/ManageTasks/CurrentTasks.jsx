import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Table from '../../UI/Table';
import GlobalActions from './GlobalActions';
import Actions from './Actions';
import Title from './Title';


const Container = styled('div')`
  padding: 16px 16px 25px 25px;
  overflow: auto;
  font-family: 'MontserratMedium';
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export default class CurrentTasks extends Component {
  columns = [
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
      width: '15%',
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
      width: '10%',
      key: 'action',
      render: record => (
        <Actions
          {...record}
          removeTask={this.handleRemoveTask}
          runTask={this.handleRunTask}
        />
      ),
    },
  ];

  static propTypes = {
    tasks: PropTypes.shape({
      data: PropTypes.array,
      actions: PropTypes.shape({
        removeTask: PropTypes.func.isRequired,
        runTask: PropTypes.func.isRequired,
      }),
    }).isRequired,
  };

  handleRemoveTask = (id) => {
    this.props.tasks.actions.removeTask(id);
  }

  handleRunTask = (task) => {
    this.props.tasks.actions.runTask(task);
  }

  render() {
    const { tasks } = this.props;

    return (
      <Container>
        <Title icon="list">
          Current Tasks
        </Title>
        <GlobalActions />
        <Table columns={this.columns} data={tasks.data} />
      </Container>
    );
  }
}

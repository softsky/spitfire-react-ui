import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

import CheckBox from '../../UI/CheckBox';
import Button from '../../UI/Button';
import Input from '../../UI/Input';

const containerCss = css`
  width: 380px;
  background: #242736;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 10px;
  font-family: 'MontserratMedium';
`;

const createBtnCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px auto 0;
  width: 185px;
  height: 47px;
  font-size: 14.5px;
`;

const resetFlexCss = css`
  flex: initial;
`;

const proxyCheckboxCss = css`
  padding: 8px 0 8px 12px;
`;

const Title = styled('p')`
  color: #ffffff;
  text-align: center;
  font-size: 23px;
  margin: 0 0 30px 0;
`;

const Row = styled('div')`
  display: flex;
  margin-bottom: 10px;

  > * {
    flex: 1;
    margin: 0 10px;
  }
  
  > *:first-child {
    margin-left: 0;
  }

  > *:last-child {
    margin-right: 0;
  }
`;

export default class CreateTask extends Component {
  static propTypes = {
    tasks: PropTypes.shape({
      actions: PropTypes.shape({
        addTask: PropTypes.func.isRequired,
      }),
    }).isRequired,
  }

  state = { form: {} }

  handleFieldChange = (value, name) => {
    const { form } = this.state;

    this.setState({
      form: {
        ...form,
        [name]: value,
      },
    });
  }

  handleTaskCreate = () => {
    const { tasks } = this.props;
    const { form } = this.state;

    tasks.actions.addTask(form);
    this.setState({ form: {} });
  }

  render() {
    const { form } = this.state;

    return (
      <div className={containerCss}>
        <Title>Create New Task</Title>
        <Row>
          <Input
            placeholder="URL/SKU"
            value={form.sku}
            onChange={value => this.handleFieldChange(value, 'sku')}
          />
        </Row>
        <Row>
          <Input
            placeholder="Size"
            value={form.size}
            onChange={value => this.handleFieldChange(value, 'size')}
          />
          <Input
            placeholder="Quantity"
            value={form.quantity}
            onChange={value => this.handleFieldChange(value, 'quantity')}
          />
        </Row>
        <Row>
          <Input
            placeholder="Profile"
            value={form.profile}
            onChange={value => this.handleFieldChange(value, 'profile')}
          />
          <CheckBox
            label="Random name"
            checked={form.randomName}
            onChange={checked => this.handleFieldChange(checked, 'randomName')}
          />
        </Row>
        <Row>
          <CheckBox
            label="Random Apt"
            checked={form.randomApt}
            onChange={checked => this.handleFieldChange(checked, 'randomApt')}
          />
          <CheckBox
            label="Random phone"
            checked={form.randomPhone}
            onChange={checked => this.handleFieldChange(checked, 'randomPhone')}
          />
        </Row>
        <Row>
          <CheckBox
            label="Full size run"
            checked={form.fullSizeRun}
            onChange={checked => this.handleFieldChange(checked, 'fullSizeRun')}
          />
        </Row>
        <Row>
          <Input
            placeholder="Start Size"
            value={form.startSize}
            onChange={value => this.handleFieldChange(value, 'startSize')}
          />
          <Input
            placeholder="End Size"
            value={form.endSize}
            onChange={value => this.handleFieldChange(value, 'endSize')}
          />
          <Input
            placeholder="Quantity"
            value={form.quantity2}
            onChange={value => this.handleFieldChange(value, 'quantity2')}
          />
        </Row>
        <Row>
          <CheckBox
            label="Task specific proxy"
            className={`${resetFlexCss} ${proxyCheckboxCss}`}
            checked={form.useSpecificProxy}
            onChange={checked => this.handleFieldChange(checked, 'useSpecificProxy')}
          />
          <CheckBox
            label="Task specific account"
            className={`${resetFlexCss} ${proxyCheckboxCss}`}
            checked={form.useSpecificAccount}
            onChange={checked => this.handleFieldChange(checked, 'useSpecificAccount')}
          />
        </Row>
        <Row>
          <Input
            width="50%"
            placeholder="Proxy"
            value={form.proxy}
            className={resetFlexCss}
            onChange={value => this.handleFieldChange(value, 'proxy')}
          />
        </Row>
        <Row>
          <Input
            placeholder="Account"
            value={form.account}
            onChange={value => this.handleFieldChange(value, 'account')}
          />
        </Row>
        <Button className={createBtnCss} onClick={this.handleTaskCreate} primary>
          create
        </Button>
      </div>
    );
  }
}

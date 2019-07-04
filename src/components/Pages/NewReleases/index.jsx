import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import styled, { css } from 'react-emotion';
import { flow } from 'lodash/fp';
import copy from 'copy-to-clipboard';
import withNewReleases from '../../../containers/withNewReleases';
import ReleaseItem from './ReleaseItem';
import Header from './Header';


const Container = styled('div')`
  padding: 0 25px 25px;
  flex: 1;
  height: calc(100% - 55px)
`;

const shoesCss = css`
  display: flex;
  flex-wrap: wrap;
  height: calc(100% - 55px);
  overflow: auto;
`;

const SpinerContainer = styled('div')`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 55px);
`;

// TODO: make reusable UI component
const Spinner = styled(FontAwesome)`
  font-size: 45px;
  color: #ffffff;
  animation: loading 3s linear infinite;
  
  @keyframes loading {
    0% { transform: rotate(0); }
    100% { transform: rotate(360deg); }
  }
`;

class NewReleases extends Component {
  static propTypes = {
    newReleases: PropTypes.shape({
      isFetching: PropTypes.bool.isRequired,
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
      })),
      actions: PropTypes.shape({
        fetchNewReleases: PropTypes.func.isRequired,
      }),
    }).isRequired,
  }

  state = {
    activeShoes: null,
  }

  componentDidMount() {
    this.fetchReleases();
  }

  fetchReleases = () => {
    const { newReleases } = this.props;
    newReleases.actions.fetchNewReleases();
  }

  handleShoesClick = (activeShoes, sku) => {
    this.setState({ activeShoes });
    copy(sku);
  }

  renderBody = () => {
    const { newReleases } = this.props;
    const { activeShoes } = this.state;

    if (newReleases.isFetching) {
      return (
        <SpinerContainer>
          <Spinner name="spinner" />
        </SpinerContainer>
      );
    }

    return (
      <div className={shoesCss}>
        {
           newReleases.data.map(item => (
             <ReleaseItem
               onClick={this.handleShoesClick}
               isActive={activeShoes === item.id}
               key={item.id}
               {...item}
             />
           ))
        }
      </div>
    );
  }

  render() {
    return (
      <Container>
        <Header onClick={this.fetchReleases} />
        { this.renderBody() }
      </Container>
    );
  }
}

export default flow([
  withNewReleases,
])(NewReleases);

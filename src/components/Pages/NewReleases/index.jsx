import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
import { flow } from 'lodash/fp';
import withNewReleases from '../../../containers/withNewReleases';
import ReleaseItem from './ReleaseItem';
import Header from './Header';


const containerCss = css`
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

class NewReleases extends Component {
  static propTypes = {
    newReleases: PropTypes.shape({
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
    const { newReleases } = this.props;
    newReleases.actions.fetchNewReleases();
  }

  handleShoesClick = (activeShoes) => {
    this.setState({ activeShoes });
  }

  render() {
    const { newReleases } = this.props;
    const { activeShoes } = this.state;

    return (
      <div className={containerCss}>
        <Header />
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
      </div>
    );
  }
}

export default flow([
  withNewReleases,
])(NewReleases);

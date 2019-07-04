import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { flow } from 'lodash/fp';
import { ThemeProvider } from 'emotion-theming';
import withAppInit from '../../containers/withAppInit';
import SideBar from '../SideBar';
import Header from '../Header';
import NewReleases from '../Pages/NewReleases';
import ManageTasks from '../Pages/ManageTasks';
import LottoResults from '../Pages/LottoResults';
import OrderChecker from '../Pages/OrderChecker';
import Profiles from '../Pages/Profiles';
import Laboratory from '../Pages/Laboratory';
import Access from '../Pages/Access';
import colors from '../../constants/colors';
import './styles.css';


class App extends Component {
  items = [
    {
      path: '/releases',
      title: 'New Releases',
      component: NewReleases,
      icon: 'rocket',
    },
    {
      path: '/tasks',
      title: 'Manage Tasks',
      component: ManageTasks,
      icon: 'list',
    },
    {
      path: '/results',
      title: 'Lotto Results',
      component: LottoResults,
      icon: 'trophy',
    },
    {
      path: '/checker',
      title: 'Order Checker',
      component: OrderChecker,
      icon: 'archive',
    },
    {
      path: '/profiles',
      title: 'Profiles',
      component: Profiles,
      icon: 'user-o',
    },
    {
      path: '/laboratory',
      title: 'Laboratory',
      component: Laboratory,
      icon: 'flask',
    },
    {
      path: '/access',
      title: 'Access',
      component: Access,
      icon: 'check',
    },
  ]

  static propTypes = {
    appInit: PropTypes.shape({
      actions: PropTypes.shape({
        uiReady: PropTypes.func.isRequired,
      }),
    }).isRequired,
  }

  componentDidMount() {
    this.props.appInit.actions.uiReady();
  }

  render() {
    return (
      <ThemeProvider theme={colors}>
        <div className="App">
          <Header />
          <Router>
            <div className="App-container">
              <Redirect to={this.items[4].path} />
              <SideBar items={this.items} />
              {
                this.items.map(item => (
                  <Route
                    key={item.path}
                    path={item.path}
                    component={item.component}
                  />
                ))
              }
            </div>
          </Router>
        </div>
      </ThemeProvider>
    );
  }
}

export default flow([
  withAppInit,
])(App);

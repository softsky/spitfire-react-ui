import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
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

  render() {
    return (
      <ThemeProvider theme={colors}>
        <div className="App">
          <Header />
          <Router>
            <div className="App-container">
              <Redirect to={this.items[0].path} />
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

export default App;

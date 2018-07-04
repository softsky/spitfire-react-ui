import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import SideBar from '../SideBar';
import Header from '../Header';
import NewReleases from '../Pages/NewReleases';
import ManageTasks from '../Pages/ManageTasks';
import LottoResults from '../Pages/LottoResults';
import OrderChecker from '../Pages/OrderChecker';
import Profiles from '../Pages/Profiles';
import Laboratory from '../Pages/Laboratory';
import Access from '../Pages/Access';
import './styles.css';


class App extends Component {
  items = [
    {
      path: '/releases',
      title: 'New Releases',
      component: NewReleases,
    },
    {
      path: '/tasks',
      title: 'Manage Tasks',
      component: ManageTasks,
    },
    {
      path: '/results',
      title: 'Lotto Results',
      component: LottoResults,
    },
    {
      path: '/checker',
      title: 'Order Checker',
      component: OrderChecker,
    },
    {
      path: '/profiles',
      title: 'Profiles',
      component: Profiles,
    },
    {
      path: '/laboratory',
      title: 'Laboratory',
      component: Laboratory,
    },
    {
      path: '/access',
      title: 'Access',
      component: Access,
    },
  ]

  render() {
    return (
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
    );
  }
}

export default App;

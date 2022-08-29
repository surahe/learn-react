import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter as Router, Link, Route } from 'react-router-dom';

import Desc from './components/desc/index'
import Config from './config/data'

import Granulation from './page/granulation';
import PureComponent from './page/pureComponent';
import HooksUseMemo from './page/hooks-useMemo';
import Suspense from './page/suspense';
import useMemo from './page/useMemo'
import classMemo from './page/classMemo'
import TimeSplit from './page/timeSplit'
import virtualList from './page/virtualList'
import batchUpdate from './page/batchUpdate'
import Hooks from './page/hooks'
import Ahooks from './page/ahooks'

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Router>
      <div className="container">
        <ul className="side">
          {
            Config.map(item => {
              return <li key={item.name}><Link to={item.name}>{item.title}</Link></li>
            })
          }
        </ul>
        <div className="main">
          <Desc path={window.location.hash} />
          <div className="code">
            <Route path="/granulation" exact component={Granulation}></Route>
            <Route path="/pureComponent" exact component={PureComponent}></Route>
            <Route path="/hooks-useMemo" exact component={HooksUseMemo}></Route>
            <Route path="/suspense" exact component={Suspense}></Route>
            <Route path="/useMemo" exact component={useMemo}></Route>
            <Route path="/classMemo" exact component={classMemo}></Route>
            <Route path="/timeSplit" exact component={TimeSplit}></Route>
            <Route path="/virtualList" exact component={virtualList}></Route>
            <Route path="/batchUpdate" exact component={batchUpdate}></Route>
            <Route path="/hooks" exact component={Hooks}></Route>
            <Route path="/ahooks" exact component={Ahooks}></Route>
            
          </div>
        </div>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

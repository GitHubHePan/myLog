/**
 * Created by TvT on 2018/11/24.
 */
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './component/Home/page';
import NotFound from './component/NotFound';

const Routes = () => {
  return (
      <Router>
        <div>
          <Switch>
            <Route path='/' component={Home}/>
            <Route path="*" component={NotFound}/>
          </Switch>
        </div>
      </Router>
  );
};

export default Routes;
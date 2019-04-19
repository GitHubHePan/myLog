/**
 * Created by TvT on 2018/11/24.
 */
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import HomeContainer from './container/home/page';
import NotFound from './component/NotFound';

// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title || to.name
//     //路由发生变化时取消当前页面网络请求
//   Object.keys(sources).forEach(item => {
//     sources[item]('取消前页面请求')
//   })
//   for (var key in sources) {
//     delete sources[key]
//   }
//   next()
// })

const Routes = () => {
  
  return (
      <Router>
        <div>
          <Switch>
            <Route path='/' component={HomeContainer}/>
            <Route path="*" component={NotFound}/>
          </Switch>
        </div>
      </Router>
  );
};
console.log(Routes)

export default Routes;
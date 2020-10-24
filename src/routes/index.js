import React, { Suspense, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { createBrowserHistory } from 'history';
import { observer } from 'mobx-react';

import routeConfig from './routeConfig';

const browserHistory = createBrowserHistory();
const routeStore = new RouterStore();
const histories = syncHistoryWithStore(browserHistory, routeStore);

const CustomRoute = ({ component: Component, isNeedAuth, isLogin, isShowBottomBar, setShowBottomBar, isHandleBottomBaar, setHandleBottomBaar, ...rest }) => {
  useEffect(() => {
    setShowBottomBar(isShowBottomBar);
  }, [isShowBottomBar]);

  const renderPage = (props) => (
    (isNeedAuth !== true || isLogin === true) ?
      <>
        <Component {...props} />

      </>
      : <Redirect to={`/login?continue=${rest.path}`} />
  );
  return (
    <Route
      {...rest}
      render={(props) => renderPage(props)}
    />
  );
};

const NotFound = () => (
  <p>Not Found euy!</p>
);

const AppNavigator = observer((props) => {
  const [isShowBottomBar, setIsShowBottomBar] = useState();

  let isHandleBottomBar = (res) => {
    //console.log(res);
    setIsShowBottomBar(res);
  };

  let goTo = (res) => () => {
    histories.push(res);
  };

  return (
    <>
      <Router history={histories}>
        <Suspense fallback={<div className="loaderWrapper">Loading ...</div>}>
          <Switch>
            {Object.keys(routeConfig).map((routeName, k) => {
              let route = routeConfig[routeName];
              return (
                <CustomRoute
                  exact
                  key={k}
                  path={route.path}
                  component={route.component}
                  isNeedAuth={route.isNeedAuth}
                  isLogin={false}
                  isShowBottomBar={route.isShowBottomBar}
                  setShowBottomBar={isHandleBottomBar}
                />
              );
            })}
            <Route path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
});

export default AppNavigator;

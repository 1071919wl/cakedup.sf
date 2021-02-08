import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';

import MainPage from './main/main_page';
import NavBarContainer from './nav/navbar_container';
import LoginFormContainer from './session/login_form_container';
import ScrollToTop from './ScrollToTop.js';


const App = () => (
  <div>
    <ScrollToTop />
    <NavBarContainer />
    <Route exact path="/" component={MainPage} />
    <Switch>
      <AuthRoute path="/admin-login" component={LoginFormContainer} />
      {/* <Route exact path="/admin-login" component={LoginFormContainer} />

      <ProtectedRoute exact path="/profile" component={ProfileFormContainer} />
      <ProtectedRoute exact path="/bulletin" component={BulletinBoardContainer} />
      <ProtectedRoute exact path="/question/:questionId" component={QuestionShowContainer} />
      <ProtectedRoute exact path="/resolved/:resolvedId" component={ResolvedShowContainer} /> */}
    </Switch>
  </div>
);

export default App;
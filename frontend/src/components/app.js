import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';

// import MainPage from './main/main_page';
import MainPageContainer from './main/main_page_container';
// import NavBarContainer from './nav/navbar_container';
import LoginFormContainer from './session/login_form_container';
import Order from './order/order';
import ScrollToTop from './ScrollToTop.js';
import '../assets/stylesheets/reset.css';


const App = () => (
  <div>
    <ScrollToTop />
    {/* <NavBarContainer /> */}
    <Route exact path="/" component={MainPageContainer} />
    <Switch>
      <AuthRoute exact path="/admin-login" component={LoginFormContainer} />
      <ProtectedRoute exact path="/order" component={Order} />

      {/* <Route exact path="/admin-login" component={LoginFormContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileFormContainer} />
      <ProtectedRoute exact path="/bulletin" component={BulletinBoardContainer} />
      <ProtectedRoute exact path="/question/:questionId" component={QuestionShowContainer} />
      <ProtectedRoute exact path="/resolved/:resolvedId" component={ResolvedShowContainer} /> */}
    </Switch>
  </div>
);

export default App;
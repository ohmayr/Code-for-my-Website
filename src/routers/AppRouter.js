import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import ContactPage from '../components/ContactPage';
import PortfolioItemPage from '../components/PortfolioItemPage';
import PortfolioPage from '../components/PortfolioPage';
import ResumePage from '../components/ResumePage';

const AppRouter = () => (
  <BrowserRouter>
  <div>
  <Header />
  <div className="wholepage">
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/portfolio" component={PortfolioPage} exact={true} />
        <Route path="/portfolio/:id" component={PortfolioItemPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/resume" component={ResumePage} />
        <Route path='/Github' component={() => window.location = 'https://www.github.com/ohmayr'}/>
        <Route component={NotFoundPage} />
      </Switch>
   </div>
   </div>
  </BrowserRouter>
);

export default AppRouter;

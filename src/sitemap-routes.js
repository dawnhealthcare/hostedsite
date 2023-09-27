import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedInvestorPage from './helpers/Protected';
import TermsAndConitionsPage from './pages/terms-and-conditions';
import ErrorPage from './pages/error';
import BlogPage from './pages/blog';
import Ambassador from './pages/ambassador';
import ResourcesPage from './pages/resources';
import AllBlogsPage from './pages/allBlogs';
import ServicesPage from './pages/services';
import SignupPage from './pages/signup';
import CareerPage from './pages/career';
import FaqPage from './pages/faqs';
import AboutPage from './pages/about';
import TeamPage from './pages/team';
import HomePage from './pages/home';

export default (
  <Routes>
    <Route exact path="/" element={<HomePage />}></Route>
    <Route exact path="/team" element={<TeamPage />}></Route>
    <Route exact path="/about" element={<AboutPage />}></Route>
    <Route exact path="/faqs" element={<FaqPage />}></Route>
    <Route exact path="/join-our-team" element={<CareerPage />}></Route>
    <Route exact path="/signup" element={<SignupPage />}></Route>
    <Route exact path="/services" element={<ServicesPage />}></Route>
    <Route exact path="/blog" element={<AllBlogsPage />}></Route>
    <Route exact path="/resources" element={<ResourcesPage />}></Route>
    <Route exact path="/ambassadorship" element={<Ambassador />}></Route>
    <Route
      exact
      path="/blog/:slug"
      element={<BlogPage setIsBlogPage={setIsBlogPage} />}
    ></Route>
    <Route exact path="*" element={<ErrorPage />}></Route>
    {/* <Route
                exact
                path="/become-an-investor"
                element={<BecomeInvestor />}
              ></Route> */}
    <Route
      exact
      path="/investor-relations"
      element={<ProtectedInvestorPage />}
    ></Route>
    <Route
      exact
      path="/terms-and-conditions"
      element={<TermsAndConitionsPage />}
    ></Route>
  </Routes>
);

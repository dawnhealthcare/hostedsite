import { useEffect, useState } from 'react';
import { Route, Routes, useLoc, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import { Header } from './components/Navbar';
import useScroll from './hooks/useScroll';
import AboutPage from './pages/about';
import CareerPage from './pages/career';
import FaqPage from './pages/faqs';
import HomePage from './pages/home';
import SignupPage from './pages/signup';
import TeamPage from './pages/team';
import { Body } from './styles';
import WOW from 'wow.js';
import 'animate.css';
import useScrollToTop from './hooks/useScrollToTop';
import TermsAndConitionsPage from './pages/terms-and-conditions';
import emailjs from 'emailjs-com';
import InvestorsPage from './pages/investors';
import ProtectedInvestorPage from './helpers/Protected';
import BecomeInvestor from './pages/become-investor';
import ServicesPage from './pages/services';
import ErrorPage from './pages/error';
import AllBlogsPage from './pages/allBlogs';
import BlogPage from './pages/blog';
import ResourcesPage from './pages/resources';

emailjs.init('WrJDyDO12oscyG2nU');
function App() {
  const params = useLocation();
  const { height, width } = useScroll();
  const [active, setActive] = useState(params.pathname);
  const [isBlogPage, setIsBlogPage] = useState(false);
  useScrollToTop();

  useEffect(() => {
    new WOW().init();
  }, []);
  useEffect(() => {
    setActive(params.pathname);
  }, [params]);
  return (
    <div className="App">
      <Header
        className={`${height > 50 || width < 990 ? 'effix' : ''} ${
          isBlogPage && 'bg-white'
        }`}
        active={active}
        setActive={setActive}
      />
      <Body>
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
      </Body>
      <Footer />
    </div>
  );
}

export default App;

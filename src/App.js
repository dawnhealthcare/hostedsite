import { useEffect, useState } from 'react';
import { Route, Routes, useLoc, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import { Header } from './components/Navbar';
import useScroll from './hooks/useScroll';
import AboutPage from './pages/about';
import CareerPage from './pages/career';
import Components from './pages/components';
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

emailjs.init('WrJDyDO12oscyG2nU');
function App() {
  const params = useLocation();
  const { height, width } = useScroll();
  const [active, setActive] = useState(params.pathname);
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
        className={`${height > 300 || width < 990 ? 'effix' : ''}`}
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
          <Route
            exact
            path="/terms-and-conditions"
            element={<TermsAndConitionsPage />}
          ></Route>
          <Route exact path="/components" element={<Components />}></Route>
        </Routes>
      </Body>
      <Footer />
    </div>
  );
}

export default App;

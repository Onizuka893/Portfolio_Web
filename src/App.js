import Welcom from './components/welcom';
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import About from './components/About';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { useState,useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  let navArray = [
    {text:'Who am I?', page:'/profile'},
    {text:'What are my skills?', page:'/skills'},
    {text:'What have I done?', page:'/projects'}
  ];
  const [offsetY, setOffsetY] = useState(0);
  const handeScroll = () => setOffsetY(window.pageYOffset < 2980 ? window.pageYOffset :  2980)

  useEffect(() => {
    window.addEventListener('scroll', handeScroll);

    return () => window.removeEventListener("scroll", handeScroll);
  },[])

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Navbar navArray={navArray}/>
        <Routes>
          <Route path='' exact element={<Welcom   offsetY={offsetY}  />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/profile' element={<Profile offsetY={offsetY}/>}/>
          <Route path='/skills' element={<Skills />}/>
          <Route path='/projects' element={<Projects />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

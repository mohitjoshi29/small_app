import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';
import Section from './Section';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { render, ReactDOM } from 'react-dom';
import Home from './Home'
import About from './About';
import Contact from './Contact';


function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

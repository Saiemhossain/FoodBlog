/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { Route, Routes } from 'react-router';
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Thank from './pages/Thank';
import NotFound from './pages/NotFound';
import Food from './pages/Food';
import Header from './components/Header';
import Footer from './components/footer/Footer';
import SingleFoodPage from './components/food/SingleFoodPage';
import Context from './context/Context';
import CheckOut from './pages/CheckOut';



function App() {
 

  return (
    <>
      <Context>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/food" element={<Food />} />
          <Route path="/food/:id" element={<SingleFoodPage />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<Thank />} />
          <Route path="/*" element={<NotFound />} />
          <Route path='/checkout' element={<CheckOut/>}  />
        </Routes>
        <Footer />
      </Context>
    </>
  );
}

export default App

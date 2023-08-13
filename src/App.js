import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Hero';
import {Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Support from './pages/Support';
import AllInOne from './pages/AllInOne';
import Pricing from './pages/Pricing';



function App() {
  return (
   <>
     <NavBar />
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/about' element={<About />} />
       <Route path='/support' element={<Support />}/>
       <Route path='/allinone' element={<AllInOne />}/>
       <Route path='/pricing' element={<Pricing />}/>
     </Routes>

   </>
  );
}

export default App;

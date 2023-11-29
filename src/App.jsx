import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import Footer from '../Components/Footer';
import Edit from '../Pages/Edit';
import FourOFour from '../Pages/FourOFour';
import Home from '../Pages/Home';
import Index from '../Pages/Index';
import New from '../Pages/New';
import Show from '../Pages/Show';
import NavBar from '../Components/NavBar';

function App() {

  return (
    <div className="App">
    <Router>
      <NavBar />
      <div className="main-content">
        
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/planets" element={<Index />} />
            <Route path="/planets/new" element={<New />} />
            <Route path="/planets/:index" element={<Show />} />
            <Route path="/planets/:index/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      
      </div>
      <Footer />
    </Router>
  </div>
);
    
}

export default App

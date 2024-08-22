import React, { useRef } from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';
const Home = () => {
    return (
      <div className=''>
        <NavBar />
      <div className="pt-1">
          <Outlet />
      </div>
        <Footer />        
      </div>
    );
};

export default Home;

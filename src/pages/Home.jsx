import React from 'react'
// import { useNavigate } from "react-router-dom";
import CardMenuHome from '../components/CardMenuHome'
import Footer from '../components/Footer'


function Home() {
  // const navigation = useNavigate();
  return (
    <div>
        {/* <Navbar /> */}
        <CardMenuHome />
        <Footer />
    </div>
  )
}

export default Home
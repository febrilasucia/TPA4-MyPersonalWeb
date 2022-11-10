import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Index from './pages/Index';
import Home from './pages/Home';
import Portofolio from './pages/Portofolio';
import Blog from './pages/Blog';
import About from './pages/About';
import DetailBlog from './pages/DetailBlog';
// import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div className="landing-page">
        <div className="nav-logo">
          <nav>
            <ul className="nav-menu">
              <li>
                <Link to={"/home"}>HOME</Link>
              </li>
              <li>
                <Link to={"/portofolio"} className="link">
                  PORTOFOLIO
                </Link>
              </li>
              <li>
                <Link to={"/blog"} className="link">
                  BLOG
                </Link>
              </li>
              <li>
                <Link to={"/aboutme"} className="link">
                  ABOUT ME
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/portofolio" element={<Portofolio />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/detailblog/:id" element={<DetailBlog />}></Route>
        <Route path="/aboutme" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App
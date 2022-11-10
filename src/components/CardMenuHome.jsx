import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function CardMenuHome() {
  return (
    <div>
      <div className="homepage">
        <div className="welcome-homepage">
          <h1>
            <b>"Hello beban keluarga" </b>
          </h1>
          <p>Please select a menu you want to see</p>
        </div>
      </div>
      <div className="card-menu">
        <ul>
          <li className="card-view">
            <Link to="/portofolio">
              <img src="src/components/image/5.png" alt="" />
              My Portofolio
            </Link>
          </li>
          <li className="card-view">
            <a href="/blog">
              <img src="src/components/image/8.png" alt="" />
              My Blog
            </a>
          </li>
          <li className="card-view">
            <a href="/aboutme">
              <img src="src/components/image/7.png" alt="" />
              My Profile
            </a>
          </li>
          <li className="card-view">
            <a href="/">
              <img src="src/components/image/5.png" alt="" />
              My Dashboard
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CardMenuHome;

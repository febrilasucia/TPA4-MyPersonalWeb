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
              <img
                src="https://i.pinimg.com/564x/37/78/b1/3778b18826f035cb1d867c89e86ddff4.jpg"
                alt=""
              />
              My Portofolio
            </Link>
          </li>
          <li className="card-view">
            <a href="/blog">
              <img
                src="https://i.pinimg.com/236x/98/63/ea/9863ea370d3ffdf99015d585f73e89d3.jpg"
                alt=""
              />
              My Blog
            </a>
          </li>
          <li className="card-view">
            <a href="/aboutme">
              <img
                src="https://i.pinimg.com/236x/63/2c/77/632c771c127d37261dd377203583e453.jpg"
                alt=""
              />
              My Profile
            </a>
          </li>
          <li className="card-view">
            <a href="/">
              <img
                src="https://i.pinimg.com/564x/e2/a0/28/e2a0281da1d233768dca1f9f17c1b0f2.jpg"
                alt=""
              />
              My Dashboard
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CardMenuHome;

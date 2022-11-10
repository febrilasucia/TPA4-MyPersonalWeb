import React from "react";

function Home() {
  return (
    <>
      <div className="home">
        <div className="image-home">
          <img src="src/components/image/4.png" alt="image1" />
        </div>
        <div className="welcome-home">
          <h1>
            <b>Welcome To</b>
          </h1>
          <h1>
            <b>My Personal Website</b>
          </h1>
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
            dignissimos veritatis, dolor obcaecati consequatur sed incidunt
            natus necessitatibus commodi, error ducimus impedit eveniet ipsam
            repudiandae ex autem laboriosam. Quos, veritatis!
          </p>

          <div className="button-home">
            <ul>
              <li>
                <a className="button1" href="">
                  Explore
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

import React from "react";

function CardMenuPortofolio() {
  return (
    <div>
      <div className="homepage">
        <div className="welcome-homepage">
          <h1>
            <b>"Ini Portofolioku, gimana?" </b>
          </h1>
          <p>Please select a menu you want to see</p>
        </div>
      </div>
      <div className="card-menu-porto">
        <ul>
          <li>
            <div className="card-view-porto">
              <img src="src/components/image/9.png" alt="" />
              <div>
                <a href="">Coffee Bean Shop</a>
                <p>
                  Hai ini lebih ke toko atau online shop di mobile yang mana
                  memberikan penawaran atau penjualan biji kopi terbaik
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="card-view-porto">
              <img src="src/components/image/10.png" alt="" />
              <div>
                <a href="">Coffee Bean Shop</a>
                <p>
                  Hai ini lebih ke toko atau online shop di mobile yang mana
                  memberikan penawaran atau penjualan biji kopi terbaik
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="card-view-porto">
              <img src="src/components/image/14.png" alt="" />
              <div>
                <a href="">Coffee Bean Shop</a>
                <p>
                  Hai ini lebih ke toko atau online shop di mobile yang mana
                  memberikan penawaran atau penjualan biji kopi terbaik
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CardMenuPortofolio;

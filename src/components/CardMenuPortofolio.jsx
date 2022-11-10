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
              <img
                src="https://i.pinimg.com/236x/ca/3c/bc/ca3cbc4ee1efd0fd61f50b6c97523757.jpg"
                alt=""
              />
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
              <img
                src="https://i.pinimg.com/236x/5f/68/a0/5f68a075137e43dbd6612e94522be0cb.jpg"
                alt=""
              />
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
              <img
                src="https://i.pinimg.com/236x/5f/30/0b/5f300b857169aa815f4fc6639b186597.jpg"
                alt=""
              />
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

import React from "react";
import { useNavigate } from "react-router-dom";

function CardMenuBlog() {
  const navigation = useNavigate();
  const data = [
    {
      id: 1,
      judul: "Apa Ngoding Harus Jago Bahasa Inggris ?",
      isi: "Memungkinkan untuk punya pengetahuan yang lebih fundamental, karena resource dalam Bahasa Inggris yang banyak",
    },
    {
      id: 2,
      judul: "Bagaimana Mencintai Error ?",
      isi: "Gimana si cara mencintai error? Bagi programmer, error itu adalah salahnya buat belajar. Ga mungkin ga error, dan lo sendiri ga bisa mengelak.",
    },
    {
      id: 3,
      judul: "Ngoding Ga Harus Begadang",
      isi: "Dulu, pas awal-awal maba, gw sering banget begadang buat bikin tugas. Gw ngerasa ngoding itu enak banget kalo malem malem.",
    },
    {
      id: 4,
      judul: "Tips Agar Tidak Minus Karena Seharian Lihat Monitor ",
      isi: "Berikut tips menjaga kesehatan mata saat di depan komputer",
    },
  ];

  const handleDetail = (id) => {
    navigation(`/detailblog/${id}`);
  };

  return (
    <div className="homepage">
      <div className="welcome-homepage">
        <h1>
          <b>"Blognya cuman curhatan aja" </b>
        </h1>
        <p>Yuk swipe ke bawah, kali aja nemu sesuatu</p>
      </div>

      <div className="card-menu-blog">
        <ul>
          {data.map((el) => {
            return (
              <div key={el.id}>
                <li>
                  <div className="card-view-blog">
                    <img src="src/components/image/11.jpg" alt="" />
                    <div className="desc">
                      <a href="">{el.judul}</a>
                      <p>{el.isi}</p>
                      <button onClick={() => handleDetail(el.id)}>
                        Klik disini untuk detail..
                      </button>
                    </div>
                  </div>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default CardMenuBlog;

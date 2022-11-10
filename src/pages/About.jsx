import React from "react";
import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";

function About() {
  return (
    <div>
      {/* <Navbar /> */}

      <div className="homepage">
        <div className="welcome-homepage">
          <h1>
            <b>"About Me?"</b>
          </h1>
          <p>Emang ada yang penasaran? Swipe kebawah, kali aja nemu sesuatu.</p>
        </div>
        <div className="profile">
          <div className="image-home">
            <img src="src/components/image/4.png" alt="" height={"300px"} />
          </div>
          <div className="name-profile">
            <h2>Profil Singkat</h2>
            <br />
            <table>
              <tr>
                <td>
                  <b>Nama</b>
                </td>
                <td>:</td>
                <td>Febrila Sucia</td>
              </tr>
              <tr>
                <td>
                  <b>Panggilan</b>
                </td>
                <td>:</td>
                <td>Suca</td>
              </tr>
              <tr>
                <td>
                  <b>Jurusan</b>
                </td>
                <td>:</td>
                <td>Teknologi Informasi / D3 Manajemen Informatika</td>
              </tr>
              <tr>
                <td>
                  <b>Asal Universitas</b>
                </td>
                <td>:</td>
                <td>Politeknik Negeri Padang</td>
              </tr>
              <tr>
                <td>
                  <b>Hobi</b>
                </td>
                <td>:</td>
                <td>Mendengarkan Omongan Tetangga</td>
              </tr>
              <tr>
                <td>
                  <b>Bakat</b>
                </td>
                <td>:</td>
                <td>Bernyanyi di wc</td>
              </tr>
              <tr>
                <td>
                  <b>Alamat</b>
                </td>
                <td>:</td>
                <td>Jln. Simp Empat Padang Tarok, Kec. Sungai Geringging, </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td> Kab Padang Pariaman, Kota Padang, Sumatera Barat</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="desc-profile">
          <p>
            Hi my name is Febrila Sucia, other people call me suca, a
            antimainstream name. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Animi nihil ducimus incidunt! Omnis cupiditate
            dolorem, recusandae placeat sit laboriosam consectetur eos fuga est
            saepe maiores officiis delectus voluptates, voluptate doloremque
            obcaecati soluta, nemo qui labore nulla illum! Corrupti, saepe
            totam! Recusandae aliquam aspernatur laborum, in architecto nobis
            nulla! Praesentium dicta, iusto eius rem neque totam excepturi, at
            magni impedit mollitia ea nulla sint, doloremque vero. Culpa, ut
            aspernatur? Architecto praesentium assumenda error temporibus fuga
            nihil illum, quam maiores excepturi dolorem eum officiis inventore
            placeat sint veniam aperiam nulla repudiandae odio tempore ullam
            pariatur sit. Atque totam, dicta praesentium consectetur facere enim
            dolor cumque velit nulla asperiores? Voluptatem ullam earum
            laboriosam architecto fugit repellat ipsa nemo culpa, sunt esse
            error facilis doloremque atque voluptate natus tempore sequi! Sit
            rerum voluptas atque modi doloribus dignissimos, itaque ad sint
            omnis perferendis repellendus voluptatibus veniam officiis officia?
            Architecto numquam autem itaque expedita nulla accusamus? Facilis
            tenetur eaque nisi autem veritatis soluta vel voluptatum. Eaque,
            natus officia quidem maiores dolor repudiandae fugiat porro,
            temporibus ducimus sint veritatis! Possimus quis commodi sapiente,
            laborum facilis aliquam eligendi laudantium ut tenetur provident,
            rem illum! In sapiente accusantium esse provident doloremque
            molestias voluptatum inventore, fugiat qui libero? Unde, quo.=
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;

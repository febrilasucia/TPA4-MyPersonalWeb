import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";

function DetailBlog() {
  const { id } = useParams();
  console.log(id);

  const detailBlog = [
    {
      id: 1,
      judul: "Apa Ngoding Harus Jago Bahasa Inggris ?",
      isi: "Hai ini lebih ke toko atau online shop di mobile yang mana memberikan penawaran atau penjualan biji kopi terbaik",
      link: "https://medium.com/@Dewey92/alasan-kenapa-anak-aiti-harus-bisa-bahasa-inggris-bad52d013153",
      desc: "Gw sering banget nemu di salah satu forum programmer terbesar di Indonesia diisi oleh pertanyaan-pertanyaan yang sangat sederhana: nanyain error kenapa. Padahal pesan error-nya jelas-jelas menjelaskan *duh* sebabnya. Kayak misalnya gini: variable 'halo' is not defined at line 4, atau table 'mahasiswa' is not found in database 'akademik' ya intinya gitu dah. Ini kan bahasa Inggris dasar banget, tapi nggak ngerti kenapa errornya. Karena nggak ngerti Bahasa Inggris dasar ini, bisa-bisa kerjaan jadi molor dan menghambat proses bikin aplikasi. Solusinya klasik: tanya-tanya ke orang yang dianggap lebih ‘pinter’. Dan lo bisa nebak sendiri kan gimana reaksinya orang yang ditanya itu: “Duh gan itu kan udah jelas errornya kenapa…” sambil ngelus-ngelus dada.Beberapa poin yang bisa gw simpulkan kalo anak aiti bisa Bahasa Inggris: Gak terlalu bergantung sama orang lain ketika nemu permasalahan. Error/masalah bisa lebih cepet diselesaikan tanpa coel-coel orang lain. Proses belajar hal baru bisa lebih cepet. Memungkinkan untuk punya pengetahuan yang lebih fundamental, karena resource dalam Bahasa Inggris yang banyak dan lebih mendalam. Jadi menurut gw pribadi sih ya hukum Bahasa Inggris di IT itu Fardhu Ain lah, gak bisa ya dosa. Hahahaha.",
    },
    {
      id: 2,
      judul: "Bagaimana Mencintai Error ?",
      isi: "Hai ini lebih ke toko atau online shop di mobile yang mana memberikan penawaran atau penjualan biji kopi terbaik",
      link: "https://medium.com/@Dewey92/alasan-kenapa-anak-aiti-harus-bisa-bahasa-inggris-bad52d013153",
      desc: "Dulu gw ngerasa beban hidup ga terlalu berat, tapi gw memilih jadi programmer. Alhasil tiap hari ada aja kodingan yang error. Ini jujur curhatan banget. Bahkan, setiap sekali setahun buat projek akhir di kampus, pasti banget ada yang error apa pun itu. Bahkan ga hanya di kodingan yang error tapi di aplikasi, programmer dasar pasti tau XAMPP, nah gw mungkin udah 20 kali error dan harus install ulang. Udah cari solusi di google, stack overflow, nihil banget wkwk. Pernah pas udah mau ngumpulin jam 1 siang, paginya jam 8.00 gw cek projek gw, kan dia buat nyimpen database tuhkan. Tiba-tiba... ERORRR keluar merah-merahnya cok. Artinya gw harus bikin database baru. Semuaaaa. Sambil nangis itu bikin database baru. Jadi back to our topic, gimana si cara mencintai error? Bagi programmer, error itu adalah salahnya buat belajar. Ga mungkin ga error, dan lo sendiri ga bisa mengelak. Meskipun lo udah beda universe nih, tapi kalo lo programmer, error tetap ada. Tapi kita udah banyak cara untuk error, google, stack overflow, temen, dosen, gw wkwk.    yabanyak deh pokoknya. Nangis sih wajar, gapapa serius, asal tangan tetep ngetype wkwk.",
    },
    {
      id: 3,
      judul: "Ngoding Ga Harus Begadang",
      isi: "Hai ini lebih ke toko atau online shop di mobile yang mana memberikan penawaran atau penjualan biji kopi terbaik",
      link: "https://medium.com/@Dewey92/alasan-kenapa-anak-aiti-harus-bisa-bahasa-inggris-bad52d013153",
      desc: "Dulu, pas awal-awal maba, gw sering banget begadang buat bikin tugas. Gw ngerasa ngoding itu enak banget kalo malem malem. Bisa fokus, bisa ngerjain banyak hal, kadang otak cair kalo begadang tengah malem. Tapi setelah itu gw tidur dan bangun dengan rasa ga puas. Kenapa yah? Setelah gw teliti, ternyata begadang malam itu tidak menyehatkan, semua orang tau lah ya. Tapi kenapa ya pas begadang kita bisa fokus banget dibanding waktu-waktu lain? Tenang. Ha? tenang?. Iya tenang. Dimalam hari hiruk-pikuk jalanan udah mulai kurang, orang-orang yang hilir mudik udah ga ada jam 12 keatas. Makanya fokus kita lebih ketika malam. Kalian pernah denger tentang kreatifitas muncul tiba-tiba dikamar mandi? Nah itu tadi, sunyi, sepi, tenang, membuat kita mudah mendapatkan kreatifitas. Tapi sayangnya banyak kekurangan ketika begadang malam seperti yang aku kutip dari laman <b>www.um-surabaya.ac.id</b> beberapa dampaknya seperti peningkatan berat badan, mengganggu metabolisme tubuh, penuaan dini, mudah lupa dan masi banyak lagi. Trus gimana dong? Ada solusi lain? Jawabannya ada. Setelah subuh. Nah banyak mungkin yang ga setuju, tapi asalkan kalian tau setelah gw membiasakan diri bekerja setelah subuh, gw ngerasa bisa fokus, setelah itu ga ngantuk serius. Karena dipagi hari itu otak kita juga udah fresh. Setelah subuh pun juga hening dan lebih tenang. Last but not least, ngoding abis subuh itu ga bikin kita sakit kayak begadang sampe jam 3. Mending kalian tidur cepet, dan bangun jam 3 nya buat ngoding. Mungkin banyak yang ga setuju, tapi ini berdasarkan pengalaman gw. Salam sehat!!",
    },
    {
      id: 4,
      judul: "Tips Agar Tidak Minus Karena Seharian Lihat Monitor",
      isi: "Hai ini lebih ke toko atau online shop di mobile yang mana memberikan penawaran atau penjualan biji kopi terbaik",
      link: "https://medium.com/@Dewey92/alasan-kenapa-anak-aiti-harus-bisa-bahasa-inggris-bad52d013153",
      desc: "Dalam kehidupan modern seperti sekarang ini Laptop / Komputer sudah menjadi barang yang sangat penting bagi kehidupan sehari-hari. Manusia sudah tidak bisa dipisahkan lagi dengan yang namanya komputer untuk melakukan pekerjaannya, belajar, ataupun sekedar untuk bermain game saja. Tapi tahukah anda, bahwa terlalu lama di depan komputer dapat menimbulkan dampak negatif bagi kesehatan anda, terutama kesehatan mata anda. Bukan hanya itu, berkurangnya aktifitas tubuh dapat membuat tubuh anda tidak membakar kalori sehingga akan menjadi timbunan lemak dan membuat anda kegemukan bahkan obesitas. Radiasi gelombang elektromagnetik yang dipancarkan oleh layar komputer atau laptop dapat menyebabkan mata mengalami kelelahan dan juga gangguan mata yang lainnya. Akibat lain terlalu lama duduk di depan komputer adalah sakit kepala / pusing, sakit leher dan pinggang, bahu pegal dan masih banyak yang lainnya. Namun jika kegiatan anda sehari-hari adalah di depan layar monitor komputer anda perlu melakukan beberapa tips di bawah ini agar aspek-aspek kesehatan tubuh anda dan juga mata anda senantiasa terjaga.",
    },
  ];

  return (
    <>
      {detailBlog
        .filter((el) => el.id === +id)
        .map((el) => {
          return (
            <div key={el.id}>
              <div className="homepage">
                <div className="welcome-homepage">
                  <h1>
                    <b>{el.judul}</b>
                  </h1>
                  <p>Coba simak baik-baik</p>
                </div>
              </div>
              <div className="desc-blog">
                {el.desc}
                <div>
                  <br />
                  Sumber : <a href={el.link}>{el.link}</a>
                </div>
              </div>
            </div>
          );
        })}

      <Footer />
    </>
  );
}

export default DetailBlog;

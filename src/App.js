import { navcol, head } from "./App.css";
import img from "./img.png";
import tes from "./b.jpg";

const App = () => {
  return (
    <div>
      <div id="home">
        <nav class="navbar navbar-expand-lg navbar-light head shadow-sm fixed-top">
          <div class="container">
            <a class="navbar-brand" href="#">
              <i class="bi bi-person-circle"></i>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#home">
                    <i class="bi bi-house-door-fill me-4"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#galery">
                    Gallery
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <section class="jumbotron text-center">
        <img
          src={img}
          alt="..."
          width="200"
          className="rounded-circle img-thumbnail"
          data-aos="flip-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        />
        <h1 class="display-4 text-white judul">We Care We Share </h1>
        <p class="lead text-white judul">Company</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FDD3DB"
            fill-opacity="1"
            d="M0,32L60,69.3C120,107,240,181,360,186.7C480,192,600,128,720,128C840,128,960,192,1080,208C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </section>

      <section id="about" className="head">
        <div className="container p-5">
          <div className="row">
            <div className="col text-center mb-4">
              <h2>About Us</h2>
            </div>
          </div>
          <div className="row justify-content-center fs-4 text-center">
            <div className="col-md-4" data-aos="fade-right" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
              <p>
                {" "}
                <span class="teks">Visi</span> :Menjadi perusahaan multi nasional tingkat global dalam jasa pelayanan transportasi, akomodasi, tours & travel yang dapat memberikan kontribusi pertumbuhan ekonomi.
              </p>
            </div>
            <div className="col-md-4" data-aos="fade-left" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
              <p>
                <span class="teks">Misi</span> : Melayani dan menyediakan produk yang terbaik kepada seluruh pelanggan dan mitra, untuk jasa transportasi, akomodasi dan tours & travel.Menyiapkan SDM yang handal dan terampil dibidangnya dan
                berkomitmen pada standard kerja yang tinggi.
              </p>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#F52349" fill-opacity="1" d="M0,128L480,32L960,128L1440,160L1440,320L960,320L480,320L0,320Z"></path>
        </svg>
      </section>
      <section id="galery" className="navcol">
        <div className="container p-5">
          <div className="row">
            <div className="col text-center text-white mb-4">
              <h2>Gallery </h2>
            </div>
          </div>
          <div className="row justify-content-center fs-5 text-center">
            <div className="col-md-4 mb-4">
              <div class="card" data-aos="flip-right" data-aos-offset="200" data-aos-delay="50">
                <img src={tes} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Paket Tour Malino - Makassar 2 Hari 1 Malam dikemas… </p>
                  <br></br>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div class="card" data-aos="flip-right" data-aos-offset="200" data-aos-delay="150">
                <img src={tes} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Dalam Paket Tour Trans Studio Makassar 4 Hari 3 Malamini, kami…</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div class="card" data-aos="flip-right" data-aos-offset="200" data-aos-delay="250">
                <img src={tes} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Sedang cari paket wisata ke Makassar yang super lengkap?! Paket… 3 Hari 2 Malam</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div class="card" data-aos="flip-right" data-aos-offset="200" data-aos-delay="350">
                <img src={tes} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Paket Tour Makassar 4 hari 3 Malam adalah program wisata</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div class="card" data-aos="flip-right" data-aos-offset="200" data-aos-delay="450">
                <img src={tes} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text"> Dalam Paket Tour Keluarga Makassar 2 Hari 1 Malam…</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div class="card" data-aos="flip-right" data-aos-offset="200" data-aos-delay="550">
                <img src={tes} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Kawasan Indonesia Timur terkenal akan panorama wisata bahari yang cantik…</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FDD3DB"
            fill-opacity="1"
            d="M0,256L80,245.3C160,235,320,213,480,224C640,235,800,277,960,266.7C1120,256,1280,192,1360,160L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </section>
      <section id="contact" className="head">
        <div className="container p-5">
          <div className="row">
            <div className="col text-center">
              <h2>Contact Us</h2>
            </div>
          </div>
          <div className="row justify-content-center mt-2">
            <div className="col-md-6">
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Nama Lengkap
                  </label>
                  <input type="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" class="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div class="mb-3">
                  <label type="email" for="exampleInputPassword1" class="form-label">
                    Email
                  </label>
                  <input class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Pesan
                  </label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">
                  kirim
                </button>
              </form>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#F52349"
            fill-opacity="1"
            d="M0,32L30,58.7C60,85,120,139,180,149.3C240,160,300,128,360,128C420,128,480,160,540,165.3C600,171,660,149,720,160C780,171,840,213,900,208C960,203,1020,149,1080,117.3C1140,85,1200,75,1260,58.7C1320,43,1380,21,1410,10.7L1440,0L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </section>
      <footer className="navcol text-center text-white pb-4">
        <p class="fw-bold">Created by: </p>
        <p class="fw-bold">Chester Wicipto </p>
      </footer>
    </div>
  );
};

export default App;

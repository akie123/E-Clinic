import image from "../../assests/photo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <section id="navtitle">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg  navbar-dark">
          <Link className="navbar-brand col-brand" to="">
            {" "}
            E-Clinic{" "}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="#working">
                  {" "}
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#testimonials" className="nav-link">
                  Testimonial
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#contact_us" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signin" className="nav-link">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="row bk">
          <div className="col-lg-6  ">
            <h1 className="head-margin">
              E Clinic - The healthcare consultation service.{" "}
            </h1>
            <h5>Consult a doctor online from anywhere, anytime!</h5>
            <button
              type="button but"
              id="but"
              className="btn btn-dark btn-lg but"
            >
              {" "}
              <i className="fa-solid fa-user-doctor"></i> Consult Now{" "}
            </button>
            <div className="row ">
              <div className="col-lg-4  col-md-12">
                <h6 className="fa-solid fa-video ck"> Video Call </h6>
              </div>

              <div className="col-lg-4 col-md-12">
                <h6 className="fa-solid fa-lock ck"> 1:1 consultation</h6>
              </div>
              <div className="col-lg-4 col-md-12">
                <h6 className="fa-solid fa-bolt ck">
                  {" "}
                  Instant Digital Prescriptions{" "}
                </h6>
              </div>
            </div>

            <div className="row ">
              <div className="col-lg-4 col-md-12">
                <h6 className="fa-solid fa-microphone ck"> Audio </h6>
              </div>

              <div className="col-lg-4 col-md-12">
                <h6 className="fa-solid fa-certificate ck">
                  {" "}
                  Certified Doctors
                </h6>
              </div>
              <div className="col-lg-4 col-md-12">
                <h6 className="fa-solid fa-handshake-angle ck">
                  {" "}
                  Flexible Appointments
                </h6>
              </div>
            </div>
          </div>

          <div className="col-lg-6  ">
            <img className="im" src={image} alt="doc" />
          </div>
        </div>
      </div>
    </section>
  );
}

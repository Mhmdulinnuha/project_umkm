import Image from "next/image";
import Navbar from "@/components/navbar";
export default function AboutPage() {
  return (
    <div className="sub_page">

      <div className="hero_area">
        <div className="bg-box">
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>

        <Navbar />
      </div>

      {/* about section */}
      <section className="about_section layout_padding">
  <div className="container">

    <div className="row">

      <div className="col-md-12">
        <div className="detail-box">
          <div className="heading_container">
            <h2>
              We Are Feane
            </h2>
          </div>

          <p>
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form, by
            injected humour, or randomised words which don't look even
            slightly believable. If you are going to use a passage of Lorem
            Ipsum, you need to be sure there isn't anything embarrassing
            hidden in the middle of text. All
          </p>

          <a href="">
            Read More
          </a>
        </div>
      </div>

    </div>

  </div>
</section>
      {/* end about section */}

      {/* footer section */}
      <footer className="footer_section">
        <div className="container">

          <div className="row">
            <div className="col-md-4 footer-col">
              <div className="footer_contact">
                <h4>
                  Contact Us
                </h4>

                <div className="contact_link_box">
                  <a href="">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span>
                      Location
                    </span>
                  </a>

                  <a href="">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>
                      Call +01 1234567890
                    </span>
                  </a>

                  <a href="">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span>
                      demo@gmail.com
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 footer-col">
              <div className="footer_detail">
                <a href="" className="footer-logo">
                  Feane
                </a>

                <p>
                  Necessary, making this the first true generator on the Internet.
                  It uses a dictionary of over 200 Latin words, combined with
                </p>

                <div className="footer_social">
                  <a href="">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>

                  <a href="">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>

                  <a href="">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>

                  <a href="">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>

                  <a href="">
                    <i className="fa fa-pinterest" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 footer-col">
              <h4>
                Opening Hours
              </h4>

              <p>
                Everyday
              </p>

              <p>
                10.00 Am -10.00 Pm
              </p>
            </div>
          </div>

          <div className="footer-info">
            <p>
              &copy; <span id="displayYear"></span> All Rights Reserved By
              <a href="https://html.design/"> Free Html Templates</a>
              <br />
              <br />
              &copy; <span id="displayYear"></span> Distributed By
              <a href="https://themewagon.com/" target="_blank">
                {" "}
                ThemeWagon
              </a>
            </p>
          </div>

        </div>
      </footer>
      {/* footer section */}

    </div>
  );
}
export default function Footer() {
  return (
    <footer className="footer_section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-col">
            <div className="footer_contact">
              <h4>Contact Us</h4>

              <div className="contact_link_box">
                <a href="">
                  <span>Location</span>
                </a>

                <a href="">
                  <span>Call +01 1234567890</span>
                </a>

                <a href="">
                  <span>demo@gmail.com</span>
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
              </p>
            </div>
          </div>

          <div className="col-md-4 footer-col">
            <h4>Opening Hours</h4>

            <p>Everyday</p>

            <p>10.00 Am -10.00 Pm</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FoodSection from "@/components/foodsection";

export default function HomePage() {
  const products = [
    {
      id: 1,
      name: "Burger Beef",
      stock_qty: 10,
      sell_price: 25000,
      image_path: "/images/f1.png",
    },
    {
      id: 2,
      name: "Pizza Cheese",
      stock_qty: 8,
      sell_price: 45000,
      image_path: "/images/f2.png",
    },
    {
      id: 3,
      name: "French Fries",
      stock_qty: 15,
      sell_price: 20000,
      image_path: "/images/f3.png",
    },
  ];

  return (
    <>
      {/* Hero Area */}
      <div className="hero_area position-relative">

        {/* Background */}
        <div className="bg-box">
          <Image
            src="/images/hero-bg.jpg"
            alt="Hero"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
          </div>
       

          <Navbar />

        {/* Slider Section */}
        <section className="slider_section">
          <div id="customCarousel1" className="carousel slide">

            <div className="carousel-inner">

              <div className="carousel-item active">
                <div className="container">
                  <div className="row">

                    <div className="col-md-7 col-lg-6">
                      <div className="detail-box">

                        <h1>Fast Food Restaurant</h1>

                        <p>
                          Doloremque, itaque aperiam facilis rerum.
                        </p>

                        <div className="btn-box">
                          <a href="#" className="btn1">
                            Order Now
                          </a>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

      </div>

      {/* Offer Section */}
      <section className="offer_section layout_padding-bottom">
        <div className="offer_container">
          <div className="container">

            <div className="row">

              <div className="col-md-6">
                <div className="box">

                  <div className="img-box">
                    <Image
                      src="/images/o1.jpg"
                      alt="Offer"
                      width={300}
                      height={300}
                    />
                  </div>

                  <div className="detail-box">
                    <h5>Tasty Thursdays</h5>

                    <h6>
                      <span>20%</span> Off
                    </h6>

                    <a href="#">
                      Order Now
                    </a>
                  </div>

                </div>
              </div>

              <div className="col-md-6">
                <div className="box">

                  <div className="img-box">
                    <Image
                      src="/images/o2.jpg"
                      alt="Offer"
                      width={300}
                      height={300}
                    />
                  </div>

                  <div className="detail-box">
                    <h5>Pizza Days</h5>

                    <h6>
                      <span>15%</span> Off
                    </h6>

                    <a href="#">
                      Order Now
                    </a>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <FoodSection />

      
      <Footer />
    </>
  );

 
}





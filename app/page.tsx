"use client";

import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FoodSection from "@/components/foodsection";
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

export default function HomePage() {
   const [photoPath, setPhotoPath] = useState("")

  useEffect(() => {
    getProfile()
  }, [])

  async function getProfile() {
  const { data, error } = await supabase
    .from("app_profile")
    .select("photo_path")
    .single()

  console.log(data)
  console.log(error)

  if (data) {
    setPhotoPath(data.photo_path)
  }
}
  return (
    <>
      {/* Hero Area */}
      <div className="hero_area position-relative">

        {/* Background */}
        <div className="bg-box">
          {photoPath && (
            <Image
              src={photoPath}
              alt="hero"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
          )}
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

                        <h1>Selamat Datang</h1>

                        <p>
                          Di Warung Kami, Anda akan menikmati makanan lezat dan pelayanan terbaik!
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





import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FoodSection from "@/components/foodsection";

export default function Menu() {
  return (
    <div className="sub_page">

      <div className="hero_area">

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

      </div>

      <div className="mt-20">
      <FoodSection />
      </div>

      <Footer />

    </div>
  );
}
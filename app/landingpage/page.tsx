import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import offer1Image from "../images/offer1.webp";
import offer2Image from "../images/offer2.webp";
import offer3Image from "../images/offer3.webp";
import heroImage from "../images/heroimg.png";

function LandingPage() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="mt-[10vmin] flex flex-col-reverse md:flex-col-reverse lg:flex-row xl:flex-row justify-evenly items-center px-4 lg:px-0">
        <div className="text-center md:text-center lg:text-start xl:text-start z-10 max-w-md lg:max-w-lg">
          <span className="text-yellow-500 font-poppins text-[1.1em] tracking-widest uppercase">
            Summer Collection
          </span>
          <h2 className="text-black text-[2.5em] font-medium mt-2 leading-tight">
            Fall-Winter<br />Collection 2023
          </h2>
          <p className="text-sm text-[#838383] mt-4 leading-relaxed">
            Embrace the chill of the season with our Fall-Winter Collection 2023,
            featuring luxurious fabrics and timeless silhouettes.
          </p>
          <button className="bg-yellow-500 text-white pt-3 pb-3 pl-8 pr-8 rounded-xl mt-6 hover:bg-white hover:text-yellow-500 transition-colors">
            Shop Now
          </button>
        </div>
        <div className="flex justify-center lg:justify-start lg:max-w-lg">
          <Image src={heroImage} alt="" className="object-cover w-full h-auto" />
        </div>
      </section>

      {/* OFFER COLLECTION */}
      <section className="container m-auto justify-center mt-20">
        <h2 className="text-dark xl:text-[2.7em] lg:text-[2.5em] md:text-[2.2em] sm:text-[2em] font-semibold font-poppins text-center">
          Exclusive <span className="text-yellow-500">Offer</span>
        </h2>
        <div className="text-center grid m-auto grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center mt-20 mb-20">

          <div className="flex flex-col justify-center items-center relative">
            <Image src={offer1Image} alt="" className="w-full h-full transtion-all duration-500 transform hover:scale-105"/>
            <div className="absolute top-8 left-5">
              <h4 className="text-black font-bold sm:xl md:2xl lg:text-[1.5em] font-poppins">Woman</h4>
              <span className="text-[#838383] font-poppins tracking-wide">Spring 2018</span>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center relative">
            <Image src={offer2Image} alt="" className="w-full h-full transtion-all duration-500 transform hover:scale-105"/>
            <div className="absolute top-8 left-5">
              <h4 className="text-black font-bold sm:xl md:2xl lg:text-[1.5em] font-poppins">Man</h4>
              <span className="text-[#838383] font-poppins tracking-wide">Winter 2022</span>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center relative">
            <Image src={offer3Image} alt="" className="w-full h-full transtion-all duration-500 transform hover:scale-105"/>
            <div className="absolute top-8 left-5">
              <h4 className="text-black font-bold sm:xl md:2xl lg:text-[1.5em] font-poppins">Accessories</h4>
              <span className="text-[#838383] font-poppins tracking-wide">New Trend</span>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}

export default LandingPage;

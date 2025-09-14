import React from "react";
import Slider from "react-slick";

// আপনার assets ফোল্ডার থেকে ছবি import
import pic from "../assets/pic.png";
import pic1 from "../assets/pic1.PNG";
import pic2 from "../assets/pic1.PNG";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,            // স্লাইড ট্রানজিশন স্পিড (0.8 সেকেন্ড)
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,   // প্রতি ১ সেকেন্ড পর ইমেজ পরিবর্তন হবে
    arrows: false,
  };

  const images = [pic, pic1, pic2];

  return (
    <div className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden p-6">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="w-full h-full">
            <img
              src={img}
              alt={`banner-${index}`}
              className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;

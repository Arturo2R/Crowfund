import React from "react";
import ImageDesk from "/src/images/image-hero-desktop.jpg";
import ImageMobile from "/src/images/image-hero-mobile.jpg";
const HeroImg = () => {
  return (
    <div className="w-full z-0 mix-blend-normal absolute top-0">
      <picture>
        <source media="(max-width: 768px)" srcset={ImageMobile} />
        <img src={ImageDesk} alt="Foto background of a computer" />
      </picture>
    </div>
  );
};

export default HeroImg;

import React from "react";
import ImageDesk from "/src/images/image-hero-desktop.jpg";
import ImageMobile from "/src/images/image-hero-mobile.jpg";
const HeroImg = () => {
  return (
    <div className="absolute top-0 z-0 w-full mix-blend-normal">
      <picture>
        <source media="(max-width: 768px)" srcSet={ImageMobile} />
        <img src={ImageDesk} alt="Foto background of a computer" />
      </picture>
    </div>
  );
};

export default HeroImg;

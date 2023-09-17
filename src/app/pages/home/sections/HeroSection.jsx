import React from "react";

const HeroSection = () => {
  return (
    <div className="heroSection">
      <video autoPlay loop muted src="/assets/video/onePiece.mp4"/>
      <div className="heroSectionOverlay"></div>
    </div>
  );
};

export default HeroSection;

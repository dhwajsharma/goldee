import React from "react";
import "./Banner.css";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {
    url:
      "https://content3.jdmagicbox.com/comp/allahabad/p6/0532px532.x532.140320111736.w3p6/catalogue/goldee-travels-bai-ka-bagh-allahabad-travel-agents-hcse6xo4iq.jpg",
  },
  {
    url:
      "https://content3.jdmagicbox.com/comp/allahabad/p6/0532px532.x532.140320111736.w3p6/catalogue/goldee-travels-bai-ka-bagh-allahabad-travel-agents-ty0c42ltsb.jpg",
  },
  {
    url:
      "https://content3.jdmagicbox.com/comp/allahabad/p6/0532px532.x532.140320111736.w3p6/catalogue/goldee-travels-bai-ka-bagh-allahabad-travel-agents-ll28x28v5h.jpg",
  },
];

const Banner = () => {
  return (
    <div className="banner">
      <SimpleImageSlider
        className="banner__image"
        width={"100%"}
        height={800}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        slideDuration={0.6}
        // style={}
      />
    </div>
  );
};

export default Banner;

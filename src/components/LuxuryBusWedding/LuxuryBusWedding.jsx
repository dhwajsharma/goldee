import React from "react";
import Header from "../Header/Header";
import "./LuxuryBusWedding.css";

const LuxuryBusWedding = () => {
  return (
    <div className="luxuryBus">
      <Header />
      <div className="luxuryBus__container">
        <div className="luxuryBus__image">
          <img
            src="https://content3.jdmagicbox.com/comp/allahabad/p6/0532px532.x532.140320111736.w3p6/catalogue/goldee-travels-bai-ka-bagh-allahabad-travel-agents-ut294fep2f.jpg"
            alt=""
          />
        </div>
        <div className="luxuryBus__details">
          <div className="luxuryBus__title">
            LUXURY BUS ON HIRE FOR WEDDINGS
          </div>
          <div className="luxuryBus__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            necessitatibus dignissimos quidem, voluptates facilis amet dicta
            laborum similique, error perferendis possimus minus vero eos illo,
            pariatur cumque velit quasi laboriosam.
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryBusWedding;

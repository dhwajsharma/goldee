import { Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import LuxuryBus from "../LuxuryBus/LuxuryBus";
import "./Products.css";

const Products = () => {
  const history = useHistory();

  return (
    <div className="products">
      <div className="products__container">
        <img
          src="https://content.jdmagicbox.com/comp/allahabad/p6/0532px532.x532.140320111736.w3p6/catalogue/goldee-travels-bai-ka-bagh-allahabad-travel-agents-l0jqltxci5.jpg"
          alt=""
        />
        <div className="products__text">
          <div className="products__heading">LUXURY BUS ON HIRE</div>
          <div className="products__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,
            quos.{" "}
          </div>
        </div>
        <Button variant="contained" onClick={() => history.push("/luxurybus")}>
          View Details
        </Button>
      </div>
      <div className="products__container">
        <img
          src="https://content.jdmagicbox.com/comp/allahabad/p6/0532px532.x532.140320111736.w3p6/catalogue/goldee-travels-bai-ka-bagh-allahabad-travel-agents-l0jqltxci5.jpg"
          alt=""
        />
        <div className="products__text">
          <div className="products__heading">BUS ON HIRE FOR WEDDING</div>
          <div className="products__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,
            quos.{" "}
          </div>
        </div>
        <Button
          variant="contained"
          onClick={() => history.push("/luxurybuswedding")}
        >
          View Details
        </Button>
      </div>
      <div className="products__container">
        <img
          src="https://content.jdmagicbox.com/comp/allahabad/p6/0532px532.x532.140320111736.w3p6/catalogue/goldee-travels-bai-ka-bagh-allahabad-travel-agents-l0jqltxci5.jpg"
          alt=""
        />
        <div className="products__text">
          <div className="products__heading">BUS ON HIRE FOR TOURS</div>
          <div className="products__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,
            quos.{" "}
          </div>
        </div>
        <Button
          variant="contained"
          onClick={() => history.push("/luxurybustours")}
        >
          View Details
        </Button>
      </div>
      <div className="products__container">
        <img
          src="https://content.jdmagicbox.com/comp/allahabad/p6/0532px532.x532.140320111736.w3p6/catalogue/goldee-travels-bai-ka-bagh-allahabad-travel-agents-l0jqltxci5.jpg"
          alt=""
        />
        <div className="products__text">
          <div className="products__heading">BUS ON HIRE FOR SCHOOLS</div>
          <div className="products__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,
            quos.{" "}
          </div>
        </div>
        <Button
          variant="contained"
          onClick={() => history.push("/luxurybusschools")}
        >
          View Details
        </Button>
      </div>
    </div>
  );
};

export default Products;

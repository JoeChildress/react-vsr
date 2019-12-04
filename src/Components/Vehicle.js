import React from "react";

// year: v.year,
//         make: v.make.label,
//         model: v.model.label,
//         stle: v.style.label,
//         bodyType: v.bodyType,
//         vin: v.vin,
//         price: v.prices[3].price.amount,
//         msrp: v.prices[1].price.amount

const Vehicle = props => {
  return (
    <div className="vehicle">
      <div>
        <div className="title">
          <h4>
            <span className="condition">{props.condition}</span>
            <span className="year">{props.year}</span>
            <span className="make">{props.make}</span>

            <span className="model">{props.model}</span>
            <span className="style">{props.style}</span>
          </h4>
        </div>
      </div>
      <div className="prices">
        <div className="msrp">MSRP: ${props.msrp}</div>
        <div className="sale-price">Price: ${props.price}</div>
      </div>
      <img
        className="vehicle-image"
        alt="vehicle"
        src="http://www.progressiveautocollisioncenter.com/images/progressive-auto-collision-center-car-icon.png"
      />
      <div className="vin">VIN: {props.vin}</div>
      <a href="#" className="cta" label="View Details">
        VIEW DETAILS
      </a>
    </div>
  );
};

export default Vehicle;

/*
NEW/USED/CERTIFIED
- preowned or certified

YEAR
MAKE
MODEL
TRIP

-----
MSRP:
SALE PRICE

----
IMAGE

----
CTAs


*/

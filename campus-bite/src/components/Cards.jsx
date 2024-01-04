/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ item }) => {
  // Add to cart
  const { name, price, image, recipe, _id } = item;
  const handleAddtoCart = (item) => {
    // console.log(item);
    const cartItem = { menuItemId: _id, name, quantity: 1, price, image };

    fetch("http://localhost:6001/carts", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItem)
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
      });
  };

  return (
    <div className="card w-11/12 bg-base-100 shadow-xl mx-auto mb-10">
      <Link to={`/menu/${item._id}`}>
        <figure>
          <img
            src={item.image}
            alt=""
            className="transition-all duration-200 h-52"
          />
        </figure>
      </Link>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p>Description Of The Item</p>
        <div className="card-actions justify-between items-center mt-2">
          <h5 className="font-semibold">
            <span>$</span>
            {item.price}
          </h5>
          <button
            className="btn btn-primary text-white"
            onClick={handleAddtoCart(item)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

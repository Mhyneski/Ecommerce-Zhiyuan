import React from "react";

const PRODUCTS = [
  {
    name: "BILLIARD ITEMS",
    image: "../images/billiard.jpg",
  },
  {
    name: "KEYCHAINS AND FIGURES",
    image: "../images/keychain.jpg",
  },
  {
    name: "MOTORCYCLE ACCESSORIES",
    image: "../images/motorcycle.jpg",
  },
  {
    name: "PICKLEBALL",
    image: "../images/pickle.jpg",
  },
];

export default function Page() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center text-cosmos mt-5">
        CHOOSE ONE OF OUR PRODUCTS!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-walnut mt-6 place-items-center">
        {PRODUCTS.map((product, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={product.image}
              alt={product.name}
              className="h-[400px] max-w-full hover:scale-105 hover:opacity-80 transition-transform duration-200 cursor-pointer"
            />
            <p className="text-2xl mt-2">{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

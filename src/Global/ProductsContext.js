import React, { createContext, useState } from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
  const [products] = useState([
    { id: 1, name: "shoes", price: 500, image: img1, status: "favorite" },
    { id: 2, name: "yellow shoes", price: 800, image: img2, status: "hot" },
    { id: 3, name: "tshirt", price: 600, image: img3, status: "new" },
    { id: 4, name: "gown", price: 2500, image: img4, status: "hot" },
    { id: 5, name: "dslr", price: 1500, image: img5, status: "favorite" },
    { id: 6, name: "camera", price: 2500, image: img6, status: "new" },
    { id: 7, name: "headphone", price: 250, image: img7, status: "favorite" },
    { id: 8, name: "android phone", price: 6500, image: img8, status: "new" },
  ]);

  return (
    <ProductsContext.Provider value={{ products: [...products] }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;

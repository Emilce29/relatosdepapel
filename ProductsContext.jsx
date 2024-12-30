import React, { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productData = [
      {
        id: 1,
        name: "Matar a un ruiseñor",
        price: 12.99,
        description: "Una novela clásica sobre el racismo y la injusticia en el sur de Estados Unidos.",
        image: require("../images/1.jfif")
      },
      {
        id: 2,
        name: "1984",
        price: 14.99,
        description: "Una novela distópica que explora la vigilancia y la pérdida de libertad.",
        image: require("../images/2.jfif")
      },
      {
        id: 3,
        name: "El gran Gatsby",
        price: 10.99,
        description: "La obra maestra de F. Scott Fitzgerald captura la decadencia de los años veinte.",
        image: require("../images/3.jfif")
      },
      {
        id: 4,
        name: "Orgullo y prejuicio",
        price: 9.99,
        description: "Una historia de amor y malentendidos en la Inglaterra de la Regencia.",
        image: require("../images/4.jfif")
      },
      {
        id: 5,
        name: "El guardián entre el centeno",
        price: 11.99,
        description: "Una novela sobre la angustia adolescente y la rebeldía en Nueva York.",
        image: require("../images/5.webp")
      }
    ];
    setProducts(productData);
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
}

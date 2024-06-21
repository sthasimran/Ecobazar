import React from "react";
import { useSelector } from "react-redux";
import Card from "../ShopComponent/Card";
const ProductFilter = () => {
  const products = useSelector((state) => state.products.filteredProducts);
  // console.log(products)

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products
        // .filter((product) => product.tag === tag)
        .map((product, index) => {
          return (
            <div key={index}>
              <Card
                id={product.id}
                img={product.img}
                title={product.title}
                price={product.price}
                initial={product.initial}
                sale={product.sale}
                rating={product.rating}
                outOfStock={product.outOfStock}
              />
            </div>
          );
        })}
    </section>
  );
};

export default ProductFilter;

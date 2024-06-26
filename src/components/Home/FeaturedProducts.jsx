import React, { useEffect } from "react";
import { GoArrowRight } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { featureProductFun } from "../../features/slices/ProductSlice";
import Card from "../ShopComponent/Card";

function FeaturedProducts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(featureProductFun(true));
  }, [dispatch]);

  const products = useSelector((state) => state.products.featureProductList);

  return (
    <section className="lg:mx-auto lg:px-28 md:px-10 px-3 mt-3">
      <div>
        <div className="flex justify-between items-center">
          <div className="text-xl font-medium">Featured Products</div>
          <div className="flex items-center gap-2 text-primary">
            View All <GoArrowRight />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {products.map((item, index) => (
            <Card
              key={index} 
              id={item.id}
              img={item.img}
              title={item.title}
              price={item.price}
              initial={item.initial}
              rating={item.rating}
              sale={item.sale}
              outOfStock={item.outOfStock}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;

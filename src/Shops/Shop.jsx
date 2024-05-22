import { React, useState } from "react";
import { data } from "../Data/db";
import Card from "../components/ShopComponent/Card";
import BottomShop from "../components/SidebarShop/BottomShop";
import Breadcrums from "../components/SidebarShop/Breadcrums";
import PaginationComponent from "../components/SidebarShop/PaginationComponent";
import TopShop from "../components/SidebarShop/TopShop";

const Shop = () => {
  const products = data;

  const [selectedCategory, setSelectedCategory] = useState(null);
  // ---Input Filter-----
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter((products) =>
    products.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
  );

  //-----Radio Filter + SortMenu---
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------buttonFilter--------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // filtering input items-query

    if (query) {
      filteredProducts = filteredItems;
    }

    // filtering selected items
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, price, tag, rating, list }) =>
          category === selected ||
          price === selected ||
          tag === selected ||
          rating === selected ||
          list === selected
      );
    }
    return filteredProducts.map(
      ({ img, title, price, initial, rating, category, sale, outOfStock }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          price={price}
          initial={initial}
          sale={sale}
          rating={rating}
          category={category}
          outOfStock={outOfStock}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory);
  console.log(result);
  return (
    <div>
      <Breadcrums />
      <TopShop result={result} handleChange={handleChange} />
      <BottomShop
        handleChange={handleChange}
        handleClick={handleClick}
        result={result}
      />
      <PaginationComponent className="text-center"/>
    </div>
  );
};

export default Shop;

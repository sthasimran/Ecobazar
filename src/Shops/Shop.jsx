import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BottomShop from "../components/SidebarShop/BottomShop";
import Breadcrumbs from "../components/SidebarShop/Breadcrumbs";
import MobileShop from "../components/SidebarShop/MobileShop";
import TopShop from "../components/SidebarShop/TopShop";
import { resetFilters } from "../features/slices/ProductSlice";

const Shop = () => {

  const dispatch = useDispatch();
  const filteredProducts = useSelector((state) => state.products.filteredProducts);
  const [isMobile, setIsMobile] = useState(false);
  

  useEffect(() => {
    // Dispatch the resetFilters action when the component mounts
    dispatch(resetFilters());
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(innerWidth <= 767);
    };

    handleResize();
    addEventListener("resize", handleResize);

    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);

  // const products = data;

  // const [selectedCategory, setSelectedCategory] = useState(null);
  // // ---Input Filter-----
  // const [query, setQuery] = useState("");

  // const handleInputChange = (event) => {
  //   setQuery(event.target.value);
  // };

  // const filteredItems = products.filter((products) =>
  //   products.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
  // );

  // //-----Radio Filter + SortMenu---
  // const handleChange = (event) => {
  //   setSelectedCategory(event.target.value);
  // };

  // // ------buttonFilter--------
  // const handleClick = (event) => {
  //   setSelectedCategory(event.target.value);
  // };

  // function filteredData(products, selected, query) {
  //   let filteredProducts = products;

  //   // filtering input items-query

  //   if (query) {
  //     filteredProducts = filteredItems;
  //   }

  //   // filtering selected items
  //   if (selected) {
  //     filteredProducts = filteredProducts.filter(
  //       ({ category, price, tag, rating, list }) =>
  //         category === selected ||
  //         price === selected ||
  //         tag === selected ||
  //         rating === selected ||
  //         list === selected
  //     );
  //   }
  //   return filteredProducts.map(
  //     (value, index) => (
  //       <Card
  //         key={index}
  //         img={value.img}
  //         title={value.title}
  //         price={value.price}
  //         initial={value.initial}
  //         sale={value.sale}
  //         rating={value.rating}
  //         category={value.category}
  //         outOfStock={value.outOfStock}
  //       />
  //     )
  //   );
  // }

  // const result = filteredData(products, selectedCategory);
  // console.log(result);
  return (
    
    <div>
      <Breadcrumbs/>
      {isMobile ? (<MobileShop/>): <> <TopShop />
      <BottomShop /></>}
     
      {/* <PaginationComponent/> */}
    </div>
  );
};

export default Shop;

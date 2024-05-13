import React from "react";
import Banner from "./components/Home/Banner";
import BgSale from "./components/Home/BgSale";
import Categories from "./components/Home/Categories";
import ClientTestimonials from "./components/Home/ClientTestimonials";
import CompanyLogo from "./components/Home/CompanyLogo";
import Featured from "./components/Home/Featured";
import FeaturedProducts from "./components/Home/FeaturedProducts";
import HotDeals from "./components/Home/HotDeals";
import InstagramPage from "./components/Home/InstagramPage";
import LatestNews from "./components/Home/LatestNews";
import Offers from "./components/Home/Offers";
import Products from "./components/Home/Products";

const Home = () => {
  return (
    <div>
      <Banner />
      <Featured />
      <Categories />
      <Products />
      <Offers />
      <HotDeals />
      <BgSale />
      <FeaturedProducts />
      <LatestNews />
      <ClientTestimonials />
      <CompanyLogo />
      <InstagramPage />
    </div>
  );
};

export default Home;

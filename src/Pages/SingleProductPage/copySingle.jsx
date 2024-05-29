import { React } from "react";
import { FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { TiSocialFacebook } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import brand from "../../assets/image/brand.png";
import Counter from "../../components/Counter";
import Description from "./Description";
import RelatedProducts from "./RelatedProducts";

const SingleProduct = () => {
  const product = useSelector((state) => state.products.singleProduct);
  const { id } = useParams();
  const dispatch = useDispatch();
  // const [selectedImage, setSelectedImage] = useState(0);
  // const images = [cabbage, cabbage2, cabbage3, cabbage4];
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   vertical: true,
  //   verticalSwiping: true,
  //   arrows: true,
  // };

  return (
    <section className=" md:mx-auto md:px-28 px-3 mt-6">
      <div className="grid grid-cols-12">
        {product
          // .filter((product) => product.id === id)
          .map((item, index) => (
            <>
              {/* slider wala side image with col-span-1 */}
              {/* <div className="col-span-5"> */}

              <div className="col-span-6">
                <div className="w-full">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-[556px] h-[556px] mb-4"
                  />
                </div>
              </div>
              <div className="col-span-6">
                <div className="border-b">
                  <div className="flex items-center gap-2 mb-2 ">
                    <h2 className="text-[#1A1A1A] text-4xl font-semibold">
                      {item.title}
                    </h2>
                    <span className="bg-[#79e67d33] text-[#2C742F] text-[14px] px-[8px] py-[8px] rounded-md top-[16px] left-[16px]">
                      In Stock
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex items-center gap-2">
                      <div className="">
                        <div className="flex items-center">
                          <span className="text-[#FFA500] text-[24px] ">
                            {"★".repeat(Math.round(item.rating))}
                          </span>
                          <span className="text-gray-400 text-[24px]">
                            {"★".repeat(5 - Math.round(item.rating))}
                          </span>
                        </div>
                      </div>
                      <span className="text-[#666666] text-sm font-normal">
                        {item.rating} Review
                      </span>
                    </div>
                    <div className="text-[#666666] text- font-normal">.</div>
                    <div className="text-[#333333] text-sm font-medium">
                      <span className="mr-2">SKU:</span>
                      <span className="text-[#666666] text-sm font-normal">
                        2,51,594
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <div>
                      <del className="text-[#B3B3B3] text-xl font-normal mr-2">
                        {item.initial}
                      </del>
                      <span className="text-[#2C742F] text-2xl font-medium">
                        {item.price}
                      </span>
                    </div>
                    <div className="text-[#EA4B48] bg-[#ee4a481a] p-2 text-sm font-medium rounded-full">
                      64% Off
                    </div>
                  </div>
                </div>
                <div className="border-b">
                  <div className="my-6">
                    <div className="flex items-center justify-between ">
                      <div className="flex items-center gap-2">
                        <span>Brand:</span>
                        <img src={brand} alt="" className="w-[56px] h-[56px]" />
                      </div>
                      <div>
                        <div className="flex gap-2 items-center  ">
                          <p>Share item:</p>
                          <div className=" hover:bg-primary h-8 w-8 flex justify-center items-center rounded-full hover:text-white ">
                            <TiSocialFacebook size={25} />
                          </div>
                          <div className=" hover:bg-primary h-8 w-8 flex justify-center items-center rounded-full hover:text-white ">
                            <FaTwitter size={20} />
                          </div>

                          <div className=" hover:bg-primary h-8 w-8 flex justify-center items-center rounded-full hover:text-white ">
                            <FaPinterestP size={20} />
                          </div>
                          <div className=" hover:bg-primary h-8 w-8 flex justify-center items-center rounded-full hover:text-white ">
                            <FaInstagram size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-[#808080] text-sm font-normal mt-2 text-left">
                      Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per inceptos himenaeos. Nulla nibh diam,
                      blandit vel consequat nec, ultrices et ipsum. Nulla varius
                      magna a consequat pulvinar.
                    </p>
                  </div>
                </div>
                <div className="border-b">
                  <div className="flex items-center justify-between gap-3 my-5">
                    <Counter />
                    {/* <CartButton/> */}
                    <NavLink to="/cart" className="">
                      <div className="bg-[#00B207] rounded-full h-[45px] w-[350px] text-white flex items-center justify-center gap-3">
                        <p>Add to Cart</p>
                        <div>
                          <HiOutlineShoppingBag size={18} />
                        </div>
                      </div>
                    </NavLink>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center  bg-[#20B5261A] hover:bg-primary text-[#2C742F]">
                      <GoHeart className="" color="black" size={20} />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 my-4">
                  <div className="text-[#1A1A1A] text-sm font-medium ">
                    Category:
                    <span className="font-normal text-[#808080] ml-2">
                      Vegetables
                    </span>
                  </div>
                  <div className="text-[#1A1A1A] text-sm font-medium">
                    Tag:{" "}
                    <span className="font-normal text-[#808080] ml-2">
                      Vegetables Healthy Chinese Cabbage Green Cabbage
                    </span>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
      <Description />
      <RelatedProducts />
    </section>
  );
};

export default SingleProduct;

import { React } from "react";
import { AiOutlineTags } from "react-icons/ai";
import { FaCircleCheck } from "react-icons/fa6";
import { IoIosLeaf } from "react-icons/io";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Description = () => {
  return (
    <div>
      <div className="lg:mx-auto lg:px-28 md:px-10 px-3 m-2">
        {/* <div className="flex"> */}
        <div className="pr-4 text-gray-500">
          <div className="flex items-center justify-center gap-5 border-b border-gray-400">
            <h2 className="text-[16px] font-medium pb-4 text-black border-b-2 border-green-500">
              Descriptions
            </h2>
            {/* <h2 className="text-[16px] font-medium mb-4">
              Additional Information
            </h2>
            <h2 className="text-[16px] font-medium mb-4">Customer Feedback</h2> */}
          </div>
          <div className="lg:flex items-center ">
            <div className="lg:w-2/3 pr-4 text-gray-500">
              <p className="mb-4 text-[14px] mt-5">
                Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet
                at posuere ac, viverra at mauris. Maecenas tincidunt ligula a
                sem vestibulum pharetra. Maecenas auctor tortor lacus, nec
                laoreet nisi porttitor vel. Etiam tincidunt metus vel dui
                interdum sollicitudin. Mauris sem ante, vestibulum nec orci
                vitae, aliquam mollis lacus. Sed et condimentum arcu, id
                molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a
                convallis. Morbi urna ipsum, placerat quis commodo quis, egestas
                elementum leo. Donec convallis mollis enim. Aliquam id mi quam.
                Phasellus nec fringilla elit.
              </p>
              <p className="mb-4 text-[14px]">
                Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui.
                Sed iaculis, metus faucibus elementum tincidunt, turpis mi
                viverra velit, pellentesque tristique neque mi eget nulla. Proin
                luctus elementum neque et pharetra.
              </p>
              {description.map((item, index) => (
                <p className="text-[14px] flex items-center  gap-3">
                  <FaCircleCheck className="" color="green"/>
                  {item}
                </p>
              ))}
              <p className="text-[14px] mt-2">
                Cras et diam maximus, accumsan sapien et, sollicitudin velit.
                Nulla blandit eros non turpis lobortis facilisis ut ut massa.
              </p>
            </div>
            <div className="lg:w-1/3 flex flex-col items-center">
              <div className="mb-4 mt-5">
                <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" className="md:w-[400px] mg:h-[250px] lg:w-[300px] w-[245px]"></iframe>
              </div>
              <div className="flex items-center justify-between bg-white border rounded-lg py-4 px-1 ">
                <div className="flex items-center ">
                  <div>
                    <AiOutlineTags color="green" className=" w-8 h-8 " />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#1A1A1A]">
                      64% Discount
                    </p>
                    <p className="text-[#808080] text-xs font-normal">
                      Save your 64% money with us
                    </p>
                  </div>
                </div>

                <div className="flex items-center ">
                  <IoIosLeaf color="green" className=" w-8 h-8" />
                  <div>
                    <p className="text-sm font-medium text-[#1A1A1A]">
                      100% Organic
                    </p>
                    <p className="text-[#808080] text-xs font-normal">
                      100% Organic Vegetables
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const description = [
  "100 g of fresh leaves provides",
  " Aliquam ac est et augue t elementum",
  "Quisque nec enim eget sapien molestie",
  " Proin convallis odio volutpat finibus posuere",
];

export default Description;

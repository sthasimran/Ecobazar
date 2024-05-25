import { React } from "react";
import { AiOutlineTags } from "react-icons/ai";
import { IoIosLeaf } from "react-icons/io";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Description = () => {
  return (
    <div>
      <div className="container mx-auto m-2">
        {/* <div className="flex"> */}
        <div className="pr-4 text-gray-500">
          <div className="flex items-center justify-center gap-5 border-b border-gray-400">
            <h2 className="text-[16px] font-medium pb-4 text-black border-b-2 border-green-500">
              Descriptions
            </h2>
            <h2 className="text-[16px] font-medium mb-4">
              Additional Information
            </h2>
            <h2 className="text-[16px] font-medium mb-4">Customer Feedback</h2>
          </div>
          <div className="flex">
            <div className="w-2/3 pr-4 text-gray-500">
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
              <ul className="list-disc list-inside mb-4 text-[14px]">
                <li className="mb-2">100 g of fresh leaves provides</li>
                <li className="mb-2">
                  Aliquam ac est et augue volutpat elementum
                </li>
                <li className="mb-2">Quisque nec enim eget sapien molestie</li>
                <li className="mb-2">
                  Proin convallis odio volutpat finibus posuere
                </li>
              </ul>
              <p className="text-[14px]">
                Cras et diam maximus, accumsan sapien et, sollicitudin velit.
                Nulla blandit eros non turpis lobortis facilisis ut ut massa.
              </p>
            </div>
            <div className="w-1/3 flex flex-col items-center">
              <div className="mb-4 mt-5">
                <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                {/* <button className="mt-2 bg-green-500 text-white py-2 px-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 inline-block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-1.801-2.14a4 4 0 10-5.902 0l-1.8 2.14a2 2 0 00-.51 1.282V14a2 2 0 002 2h6a2 2 0 002-2v-1.55a2 2 0 00-.51-1.282z"
                    />
                  </svg>
                  <span className="ml-2">Play Video</span>
                </button> */}
              </div>
              <div className="flex items-center justify-between bg-white border rounded-lg">
                <div className="">
                  <div className="flex items-center ">
                    <div>
                      <AiOutlineTags  color="green" className=" w-8 h-8 " />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#1A1A1A]">64% Discount</p>
                      <p className="text-[#808080] text-xs font-normal">
                        Save your 64% money with us
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full p-4 ">
                  <div className="flex items-center mb-2">
                    <IoIosLeaf color="green" className=" w-8 h-8"/>
                    <div>
                      <p className="text-sm font-medium text-[#1A1A1A]">100% Organic</p>
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
    </div>
  );
};

export default Description;

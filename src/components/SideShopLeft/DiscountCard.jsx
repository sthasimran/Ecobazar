import React from 'react'
import { GoArrowRight } from 'react-icons/go'
const DiscountCard = () => {
  return (
    <div>
      <div className="bg-[url('./assets/image/sidebar_offer.png')] bg-cover rounded-md p-6  h-[295px]">
        <div className=' text-2xl font-normal text-center'>
            <span className='text-orange'>79%</span><span>Discount</span>
            <p className='text-[#4D4D4D] text-[16px] leading-6'>on your first order</p>
        </div>
        <div className="flex items-center justify-center gap-2  text-primary text-center font-semibold text-[16px] leading-5 py-2 px-4 rounded-3xl h-12 w-48 mt-1">
              <button className="ml-4">Shop now </button>
              <GoArrowRight />
            </div>
      </div>
    </div>
  )
}

export default DiscountCard

import React from 'react'
import { AiFillStar } from 'react-icons/ai'
const Checkbox = () => {
  const ratingBox = [
    ``,
    ``,
    ``,
    ``,
    ``,
  ]
  return (
    <div>
        <label className="flex items-center gap-2">
            <input type="checkbox" name="rating"/>
            <span className="flex" ><AiFillStar color="orange"/> <AiFillStar color="orange"/> <AiFillStar color="orange"/> <AiFillStar color="orange"/> <AiFillStar color="orange"/></span>
            <span className="text-[#1A1A1A] ml-1 text-sm font-normal">5.0</span>
        </label>
    </div>
  )
}

export default Checkbox

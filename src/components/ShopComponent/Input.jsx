import React from 'react'

const Input = ({handleChange, value, title, img, name, quantity}) => {
  return (
    <div>
       <label className="">
            <input onChange={handleChange} type="radio" value={value} name={name}/>
            <span className="ml-2 text-sm font-normal text-[#1A1A1A]" >{title}</span>
            <span className="text-gray-500 ml-2 text-sm font-normal">{quantity}</span>
        </label>
    </div>
  )
}

export default Input

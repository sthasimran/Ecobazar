import React from "react";

const DropMenu = ({ handleChange, value, title }) => {
  return <option value={value} className="text-sm font-normal">{title}</option>;
};

export default DropMenu;

import React from "react";

const DropMenu = ({ handleChange, value, list }) => {
  return (
    <div>
      <option value={value}>{list}</option>
    </div>
  );
};

export default DropMenu;

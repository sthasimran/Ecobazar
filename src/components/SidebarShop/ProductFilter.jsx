import React from "react";
const ProductFilter = ({ result }) => {
  console.log(result);
  return (
    <section className="grid grid-cols-3 gap-4">
      {result.map((item, index) => (
        <div>{item}</div>
      ))}
    </section>
  );
};

export default ProductFilter;

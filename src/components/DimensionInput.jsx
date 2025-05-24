import React, { useState } from "react";

const DimensionInput = ({ name, label }) => {
  const [dimensions, setDimensions] = useState({
    length: "",
    width: "",
    height: "",
  });

  const handleChange = (field, value) => {
    setDimensions({ ...dimensions, [field]: value });
  };

  return (
    <div>
      <label className="block font-medium mb-1">{label}</label>
      <div className="flex space-x-2">
        {["length", "width", "height"].map((dim) => (
          <input
            key={dim}
            type="number"
            name={`${name}_${dim}`}
            value={dimensions[dim]}
            onChange={(e) => handleChange(dim, e.target.value)}
            className="w-full border p-2 rounded"
            placeholder={dim[0].toUpperCase() + dim.slice(1)}
          />
        ))}
      </div>
    </div>
  );
};

export default DimensionInput;

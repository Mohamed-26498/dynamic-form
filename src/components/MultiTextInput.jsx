import React, { useState } from "react";

const MultiTextInput = ({ name, label, count }) => {
  const [values, setValues] = useState(Array(count).fill(""));

  const handleChange = (index, value) => {
    const updated = [...values];
    updated[index] = value;
    setValues(updated);
  };

  return (
    <div>
      <label className="block font-medium mb-1">{label}</label>
      <div className="space-y-2">
        {Array.from({ length: count }).map((_, i) => (
          <input
            key={i}
            type="text"
            name={`${name}_${i}`}
            value={values[i]}
            onChange={(e) => handleChange(i, e.target.value)}
            className="w-full border p-2 rounded"
            placeholder={`${label} #${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MultiTextInput;

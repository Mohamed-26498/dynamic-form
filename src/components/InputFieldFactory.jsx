import React from "react";
import MediaUploader from "./MediaUploader";
import MultiTextInput from "./MultiTextInput";
import DimensionInput from "./DimensionInput";

const InputFieldFactory = ({ field }) => {
  const {
    input_type,
    input_format,
    input_name,
    label,
    max_length,
    options,
    count,
  } = field;

  if (input_type === "input_raw") {
    if (input_format === "textarea") {
      return (
        <div>
          <label>{label}</label>
          <textarea
            name={input_name}
            maxLength={max_length}
            className="w-full border p-2 rounded"
          />
        </div>
      );
    }

    if (input_format === "dimension") {
      return <DimensionInput name={input_name} label={label} />;
    }

    return (
      <div>
        <label>{label}</label>
        <input
          type={input_format === "number" ? "number" : "text"}
          name={input_name}
          maxLength={max_length}
          className="w-full border p-2 rounded"
        />
      </div>
    );
  }

  if (input_type === "input_selection") {
    if (input_format === "drop") {
      return (
        <div>
          <label>{label}</label>
          <select name={input_name} className="w-full border p-2 rounded">
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      );
    }

    if (input_format === "multi_text") {
      return (
        <MultiTextInput name={input_name} label={label} count={count || 1} />
      );
    }
  }

  if (input_type === "input_media") {
    return <MediaUploader field={field} />;
  }

  return null;
};

export default InputFieldFactory;

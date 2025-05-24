import React from "react";
import InputFieldFactory from "./InputFieldFactory";

// Renders a single step of the form, including all inputs for that step.
const FormStepRenderer = ({ step }) => {
  const sortedInputs = [...step.inputs].sort((a, b) => a.order - b.order);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">
        {step.step_name.replace("_", " ")}
      </h2>
      <div className="space-y-4">
        {sortedInputs.map((input) => (
          <InputFieldFactory key={input.input_name} field={input} />
        ))}
      </div>
    </div>
  );
};

export default FormStepRenderer;

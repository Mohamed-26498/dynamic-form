import React, { useState } from "react";
import formSchema from "./data/assignement_form.json";
import FormStepRenderer from "./components/FormStepRenderer";

const App = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const schema = formSchema;
  const currentStep = schema.form_steps[stepIndex];

  const handleNext = () => {
    if (stepIndex < schema.steps_count - 1) setStepIndex(stepIndex + 1);
  };

  const handleBack = () => {
    if (stepIndex > 0) setStepIndex(stepIndex - 1);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        {schema.form_name.replace("_", " ")}
      </h1>
      <FormStepRenderer step={currentStep} />
      <div className="flex justify-between mt-6">
        <button onClick={handleBack} disabled={stepIndex === 0}>
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={stepIndex === schema.steps_count - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;

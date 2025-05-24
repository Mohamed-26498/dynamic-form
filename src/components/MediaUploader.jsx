import React, { useState } from "react";

const MediaUploader = ({ field }) => {
  const { input_name, label, max_count, accepted_formats } = field;
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const filtered = selectedFiles.filter((file) => {
      const ext = file.name.split(".").pop().toLowerCase();
      return accepted_formats.includes(ext);
    });

    const newFiles = [...files, ...filtered].slice(0, max_count);
    setFiles(newFiles);
  };

  return (
    <div>
      <label className="block font-medium mb-1">
        {label} (Max: {max_count})
      </label>
      <input
        type="file"
        name={input_name}
        accept={accepted_formats.map((f) => `.${f}`).join(",")}
        multiple={max_count > 1}
        onChange={handleFileChange}
        className="block mb-2"
      />
      <div className="flex flex-wrap gap-2">
        {files.map((file, index) => (
          <div key={index} className="text-sm border rounded p-1 bg-gray-50">
            {file.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaUploader;

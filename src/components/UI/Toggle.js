import React from "react";

const Toggle = ({ enabled, onChange, id }) => {
  return (
    <button
      type="button"
      className={`
        ${enabled ? "bg-blue-500" : "bg-gray-200"}
        relative inline-flex h-7 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent 
        transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
      `}
      role="switch"
      aria-checked={enabled}
      onClick={() => onChange(id, !enabled)}
    >
      <span className="sr-only">Toggle agent status</span>
      <span
        aria-hidden="true"
        className={`
          ${enabled ? "translate-x-5" : "translate-x-0"}
          pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0 
          transition duration-200 ease-in-out
        `}
      />
    </button>
  );
};

export default Toggle;

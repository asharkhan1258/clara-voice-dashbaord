import React from "react";

const Toggle = ({ enabled, onChange, id }) => {
  return (
    <button
      type="button"
      className={`
        relative inline-flex h-8 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent 
        transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2
        ${enabled ? "focus:ring-blue-500" : "focus:ring-gray-300"}
      `}
      style={{
        background: enabled 
          ? 'var(--apple-green-500)'
          : 'var(--apple-gray-200)'
      }}
      role="switch"
      aria-checked={enabled}
      onClick={() => onChange(id, !enabled)}
    >
      <span className="sr-only">Toggle agent status</span>
      <span
        aria-hidden="true"
        className={`
          ${enabled ? "translate-x-6" : "translate-x-0"}
          pointer-events-none inline-block h-7 w-7 transform rounded-full bg-white 
          transition-all duration-300 ease-out
        `}
        style={{
          boxShadow: 'var(--apple-shadow-sm)'
        }}
      />
    </button>
  );
};

export default Toggle;

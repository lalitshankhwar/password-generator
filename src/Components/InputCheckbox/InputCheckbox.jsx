import React from "react";

function InputCheckbox({ label, id, isAllowed, setIsAllowed }) {
  return (
    <div className="p-2 flex gap-3">
      <input
        id={id}
        checked={isAllowed}
        onChange={() => setIsAllowed(!isAllowed)}
        type="checkbox"
        className="cursor-pointer"
      />
      <label
        htmlFor={id}
        className="cursor-pointer text-xs sm:text-base text-zinc-300"
      >
        {label}
      </label>
    </div>
  );
}

export default InputCheckbox;

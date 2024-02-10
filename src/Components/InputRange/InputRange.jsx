import React from "react";

function InputRange({ label, id, value, setValue, min = 2, max = 64 }) {
  return (
    <div className="p-2">
      <label
        htmlFor={id}
        className=" flex justify-between text-xs sm:text-base text-zinc-300"
      >
        {label} <span>{value}</span>
      </label>
      <input
        className="block mt-2 w-full"
        style={{
          background: `linear-gradient(to right, #f50 ${
            (value / max) * 100
          }%, #ccc ${(length / 35) * 100}%)`,
        }}
        min={min}
        max={max}
        value={value}
        id={id}
        type="range"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default InputRange;

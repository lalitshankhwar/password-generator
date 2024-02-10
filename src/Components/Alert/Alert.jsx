import React from "react";
import "./Alert.css";

function Alert({ copy }) {
  return (
    <div className="Alert absolute text-green-500 bg-zinc-800 py-2 px-4 border border-zinc-700">
      Successfully Copied
    </div>
  );
}

export default Alert;

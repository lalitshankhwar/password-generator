import React, { useCallback, useState } from "react";
import { FaCopy } from "react-icons/fa";
import Alert from "../Alert/Alert";

function PasswordOutput({ password }) {
  const [isCopy, setIsCopy] = useState(false);

  const copyToClipboard = useCallback(
    (text) => {
      navigator.clipboard.writeText(text);
      setIsCopy(true);
      setTimeout(() => {
        setIsCopy(false);
      }, 1500);
    },
    [password]
  );

  return (
    <div className="flex justify-center items-center bg-zinc-950 rounded-md p-3">
      {isCopy && <Alert />}
      <span className="w-full break-all text-xs sm:text-base text-zinc-300 font-bold">
        {password}
      </span>
      <FaCopy
        className="cursor-pointer text-zinc-300 hover:text-[#f50] active:scale-90"
        size={20}
        onClick={() => copyToClipboard(password)}
      />
    </div>
  );
}

export default PasswordOutput;

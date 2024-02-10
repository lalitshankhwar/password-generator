import React, { useCallback, useEffect, useState } from "react";
import InputCheckbox from "./Components/InputCheckbox/InputCheckbox";
import InputRange from "./Components/InputRange/InputRange";
import PasswordStrengthBar from "react-password-strength-bar";
import PasswordOutput from "./Components/PasswordOutput/PasswordOutput";

function App() {
  const [isNumAllowed, setIsNumAllowed] = useState(false);
  const [isSymbolAllowed, setIsSymbolAllowed] = useState(false);
  const [isUppercaseAllowed, setIsUppercaseAllowed] = useState(false);
  const [isLowercaseAllowed, setIsLowercaseAllowed] = useState(true);
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let char = "";
    let pass = "";
    if (isLowercaseAllowed) char += "abcdefghijklmnopqrstuvwxyz";
    if (isUppercaseAllowed) char += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (isNumAllowed) char += "0123456789";
    if (isSymbolAllowed) char += "!@$%^&*?/|";

    for (let i = 0; i < length; i++) {
      const rand = Math.floor(Math.random() * char.length);
      pass += char[rand] || "";
    }
    setPassword(pass);
  }, [
    length,
    isNumAllowed,
    isLowercaseAllowed,
    isUppercaseAllowed,
    isSymbolAllowed,
    setPassword,
  ]);

  useEffect(() => {
    generatePassword();
  }, [
    length,
    isLowercaseAllowed,
    isUppercaseAllowed,
    isNumAllowed,
    isSymbolAllowed,
    generatePassword,
  ]);

  return (
    <div className="w-full h-screen bg-zinc-950 flex flex-col items-center">
      <h1 className="text-xl font-bold text-zinc-500 mt-20 mb-2">
        Password Generator
      </h1>
      <div className="p-3 bg-zinc-800 w-2/3 md:w-2/3 lg:w-1/3 rounded">
        <PasswordOutput password={password} />
        <div className="mt-3 px-2">
          <PasswordStrengthBar password={password} />
        </div>
        <InputRange
          label="Length"
          id="length"
          value={length}
          setValue={setLength}
        />
        <InputCheckbox
          label={"Include Lowercase Letters a - z"}
          id={"lowercase"}
          isAllowed={isLowercaseAllowed}
          setIsAllowed={setIsLowercaseAllowed}
        />
        <InputCheckbox
          label={"Include Uppercase Letters A - Z"}
          id={"upperCase"}
          isAllowed={isUppercaseAllowed}
          setIsAllowed={setIsUppercaseAllowed}
        />
        <InputCheckbox
          label={"Include Numbers 0 - 9"}
          id={"number"}
          isAllowed={isNumAllowed}
          setIsAllowed={setIsNumAllowed}
        />
        <InputCheckbox
          label={"Include Symbols !@$%^&*?/|"}
          id={"symbol"}
          isAllowed={isSymbolAllowed}
          setIsAllowed={setIsSymbolAllowed}
        />
      </div>
    </div>
  );
}

export default App;

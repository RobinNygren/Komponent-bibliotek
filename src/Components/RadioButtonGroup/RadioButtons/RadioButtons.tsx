import React, { useState } from "react";

import "./styles.scss";

type RadioProps = {
  optionsArray: { name: string }[];
  FormHeader: string;
};

const RadioButtons: React.FC<RadioProps> = ({ optionsArray, FormHeader }) => {
  const [selectedRadioOption, setSelectedRadioOption] = useState("");

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadioOption(e.target.value);
  };
  return (
    <>
      <div className="radioBox">
        <h2>{FormHeader}</h2>
        <form className="radioForm">
          {optionsArray.map((input) => (
            <div>
              <label htmlFor="">{input.name}</label>
              <input
                type="radio"
                onChange={handleRadioChange}
                value={input.name}
                checked={selectedRadioOption === input.name}
              />
            </div>
          ))}
        </form>
      </div>
    </>
  );
};

export default RadioButtons;

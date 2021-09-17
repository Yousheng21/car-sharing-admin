import { useEffect, useState } from "react";

import { regExpColor, regExpModelName } from "../../reducers/data/regExp";

export const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState({ value: true, text: "" });
  const [isModelName, setModelName] = useState({
    value: false,
    text: "",
  });
  const [isColor, setColorError] = useState({
    value: false,
    text: "",
  });
  const [minError, setMinError] = useState({
    value: false,
    text: "",
  });
  const [maxError, setMaxError] = useState({
    value: false,
    text: "",
  });
  const [inputValid, setInputValid] = useState(false);

  const valueValidation = {
    isEmpty,
    isModelName,
    isColor,
    maxError,
    minError,
  };

  const setValidation = (setValue, validationName) => {
    return setValue({
      value: !!validationName,
      text: validationName ? validations[validationName].text : "",
    });
  };

  useEffect(() => {
    Object.keys(validations).forEach((validation) => {
      switch (validation) {
        case "isEmpty":
          if (value) setValidation(setEmpty);
          else setValidation(setEmpty, validation);
          break;
        case "isModelName":
          if (regExpModelName.test(String(value))) setValidation(setModelName);
          else setValidation(setModelName, validation);
          break;
        case "isColor":
          if (regExpColor.test(String(value)) || !value)
            setValidation(setColorError);
          else setValidation(setColorError, validation);
          break;
        case "minError":
          if (value > validations[validation].min) setValidation(setMinError);
          else setValidation(setMinError, validation);
          break;
        case "maxError":
          if (value >= validations[validation].max)
            setValidation(setMaxError, validation);
          else setValidation(setMaxError);
          break;
        default: {
          break;
        }
      }
    });
  }, [value]);

  useEffect(() => {
    if (
      Object.keys(validations).some((item) => {
        return valueValidation[item].value;
      })
    )
      setInputValid(false);
    else {
      setInputValid(true);
    }
  }, [
    isEmpty.value,
    isModelName.value,
    isColor.value,
    maxError.value,
    minError.value,
  ]);

  return {
    isEmpty,
    isModelName,
    isColor,
    maxError,
    setMaxError,
    minError,
    setMinError,
    inputValid,
    setInputValid,
  };
};

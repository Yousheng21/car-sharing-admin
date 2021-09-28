import { useEffect, useState } from "react";

import {
  regExpColor,
  regExpModelName,
  regExpAddress,
} from "../../reducers/data/regExp";

export const useValidation = (value, validations, arrayChange = []) => {
  const [isEmpty, setEmpty] = useState({ value: true, text: "" });
  const [isEmptySelect, setEmptySelect] = useState({ value: true, text: "" });
  const [isEmptyImage, setEmptyImage] = useState({ value: true, text: "" });
  const [isEmptyArray, setEmptyArray] = useState({ value: true, text: "" });
  const [isModelName, setModelName] = useState({
    value: false,
    text: "",
  });
  const [isColor, setColorError] = useState({
    value: false,
    text: "",
  });
  const [isAddress, setAddressError] = useState({
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
  const [rangeError, setRangeError] = useState({
    value: false,
    text: "",
  });
  const [inputValid, setInputValid] = useState(false);

  const valueValidation = {
    isEmpty,
    isEmptySelect,
    isEmptyImage,
    isEmptyArray,
    isModelName,
    isColor,
    isAddress,
    maxError,
    minError,
    rangeError,
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
        case "isEmptySelect":
          if (value.id) setValidation(setEmptySelect);
          else setValidation(setEmptySelect, validation);
          break;
        case "isEmptyImage":
          if (value.path) setValidation(setEmptyImage);
          else setValidation(setEmptyImage, validation);
          break;
        case "isEmptyArray":
          if (value.length) setValidation(setEmptyArray);
          else setValidation(setEmptyArray, validation);
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
        case "isAddress":
          if (regExpAddress.test(String(value)) || !value)
            setValidation(setAddressError);
          else setValidation(setAddressError, validation);
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
        case "rangeError":
          if (
            value >= validations[validation].max ||
            value <= validations[validation].min
          )
            setValidation(setRangeError, validation);
          else setValidation(setRangeError);
          break;
        default: {
          break;
        }
      }
    });
  }, [value, ...arrayChange]);

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
    isEmptySelect.value,
    isEmptyImage.value,
    isEmptyArray.value,
    isModelName.value,
    isColor.value,
    isAddress.value,
    maxError.value,
    minError.value,
    rangeError.value,
  ]);

  return {
    isEmpty,
    isEmptySelect,
    isEmptyImage,
    isEmptyArray,
    isModelName,
    isColor,
    isAddress,
    maxError,
    setMaxError,
    minError,
    rangeError,
    setRangeError,
    setMinError,
    inputValid,
    setInputValid,
  };
};

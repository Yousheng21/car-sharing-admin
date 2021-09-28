import { useState } from "react";
import { useValidation } from "./validator";

export const useInput = (initialState, validations, arrayChange) => {
  const [value, setValue] = useState(initialState);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations, arrayChange);

  const onChange = (event) => {
    const { type } = event.currentTarget;
    setValue(
      type === "number"
        ? Number(event.currentTarget.value)
        : event.currentTarget.value
    );
  };

  const setChange = (valueInput) => {
    setValue(valueInput);
  };

  const onBlur = () => {
    setDirty(true);
  };
  const onFocus = () => {
    setDirty(false);
  };

  const printError = (validators) => {
    const element = validators.find((item) => {
      return valid[item].value;
    });
    if (element) return valid[element].text;
  };

  return {
    value,
    onChange,
    setChange,
    onBlur,
    onFocus,
    isDirty,
    printError,
    ...valid,
  };
};

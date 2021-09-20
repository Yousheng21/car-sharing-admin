import { useState } from "react";
import { useValidation } from "./validator";

export const useInput = (initialState, validations) => {
  const [value, setValue] = useState(initialState);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (event) => {
    setValue(event.target.value);
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
    onBlur,
    onFocus,
    isDirty,
    printError,
    ...valid,
  };
};

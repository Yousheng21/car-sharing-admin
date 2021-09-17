import { useState } from "react";
import { useValidation } from "./validator";

export const useInput = (initialState, validations) => {
  const [value, setValue] = useState(initialState);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e) => {
    const { type } = e.currentTarget;
    setValue(
      type === "number" ? Number(e.currentTarget.value) : e.currentTarget.value
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
    let flag = false;
    return validators.map((item) => {
      if (!flag) {
        if (valid[item].value) {
          flag = true;
          return valid[item].text;
        }
      }
      return true;
    });
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

import { useEffect, useState } from "react";

export const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState({ value: true, text: "" });
  const [emailError, setEmailError] = useState({ value: false, text: "" });
  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    Object.keys(validations).forEach((validation) => {
      switch (validation) {
        case "isEmpty":
          if (value) setEmpty({ value: false, text: "" });
          else setEmpty({ value: true, text: validations[validation].text });
          break;
        case "isEmail":
          {
            const re =
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (re.test(String(value).toLowerCase()))
              setEmailError({ value: false, text: "" });
            else
              setEmailError({
                value: true,
                text: validations[validation].text,
              });
          }
          break;
        default: {
          break;
        }
      }
    });
  }, [value]);

  useEffect(() => {
    if (isEmpty.value || emailError.value) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty.value, emailError.value]);

  return { isEmpty, emailError, inputValid };
};

export const useInput = (initialState, validations) => {
  const [value, setValue] = useState(initialState);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e) => {
    setValue(e.target.value);
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
    onBlur,
    onFocus,
    isDirty,
    printError,
    ...valid,
  };
};

import { useEffect, useState } from "react";

const regExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
          if (regExp.test(String(value).toLowerCase()))
            setEmailError({ value: false, text: "" });
          else
            setEmailError({
              value: true,
              text: validations[validation].text,
            });
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

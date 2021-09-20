import React from "react";
import "./authorization.scss";

import { useDispatch } from "react-redux";
import Logo from "../../images/Logo Icon.svg";
import Input from "../common/Input/Input";
import { useInput } from "../../utils/Validator/useInput";
import { login } from "../../actions/login";
import ListSelector from "../../utils/listSelectors";

const Authorization = () => {
  const dispatch = useDispatch();

  const { isErrorAuth } = ListSelector();

  const email = useInput("", {
    isEmpty: { value: true, text: "Пустое поле" },
  });
  const password = useInput("", {
    isEmpty: { value: true, text: "Пустое поле" },
  });

  const handleSubmit = (event, emailValue, passwordValue) => {
    dispatch(login(emailValue, passwordValue));
    event.preventDefault();
  };

  return (
    <div className="auth">
      <div className="auth-header">
        <Logo />
        <h1>Need for drive</h1>
      </div>
      <main className="auth-content">
        <h2>Вход</h2>
        <form
          onSubmit={(event) => {
            handleSubmit(event, email.value, password.value);
          }}
        >
          <Input
            id="username"
            value={email.value}
            onBlur={email.onBlur}
            placeholder="Введите логин..."
            type="text"
            label="Логин"
            setValue={email.onChange}
            error={email.isDirty && email.printError(["isEmpty", "emailError"])}
          />
          <Input
            id="password"
            value={password.value}
            onBlur={password.onBlur}
            placeholder="Введите пароль..."
            type="password"
            label="Пароль"
            setValue={password.onChange}
            error={password.isDirty && password.printError(["isEmpty"])}
          />
          <section className="auth-footer">
            <a className="link-primary" href="/car-sharing-admin">
              Запросить доступ
            </a>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!email.inputValid || !password.inputValid}
            >
              Войти
            </button>
          </section>
        </form>
        <span className="error">
          {isErrorAuth.value ? isErrorAuth.text : ""}
        </span>
      </main>
    </div>
  );
};

export default Authorization;

import React from "react";
import "./authorization.scss";

import { useDispatch, useSelector } from "react-redux";
import Logo from "../../images/Logo Icon.svg";
import Input from "../common/Input/Input";
import { useInput } from "../../utils/Validator/validator";
import { login } from "../../actions/login";

const Authorization = () => {
  const dispatch = useDispatch();

  const isErrorForm = useSelector((state) => state.user.isErrorAuth);

  const email = useInput("", {
    isEmpty: { value: true, text: "Пустое поле" },
  });
  const password = useInput("", {
    isEmpty: { value: true, text: "Пустое поле" },
  });
  return (
    <div className="auth">
      <div className="auth-header">
        <Logo />
        <h1>Need for drive</h1>
      </div>
      <main className="auth-content">
        <h2>Вход</h2>
        <form action="">
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
              type="button"
              className="btn btn-primary"
              disabled={!email.inputValid || !password.inputValid}
              onClick={() => dispatch(login(email.value, password.value))}
            >
              Войти
            </button>
          </section>
        </form>
        <span className="error">
          {isErrorForm.value ? isErrorForm.text : ""}
        </span>
      </main>
    </div>
  );
};

export default Authorization;

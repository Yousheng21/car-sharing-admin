import React, { useEffect, useState } from "react";
import "./appLayout.scss";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import NavBar from "../../common/NavBar/NavBar";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import { setTooltip } from "../../../reducers/appReducer";
import Check from "../../../images/Check Icon.svg";
import TooltipText from "./TooltipText";
import Delete from "../../../images/Delete.svg";
import ListSelector from "../../../utils/listSelector";

const AppLayout = ({ children, title, page, entity, kind, id, entityId }) => {
  const dispatch = useDispatch();

  const [viewTooltip, setViewTooltip] = useState(!!id);

  const { tooltip } = ListSelector();

  useEffect(() => {
    if (tooltip.type) {
      setTimeout(() => dispatch(setTooltip("", "")), 3000);
      setViewTooltip(false);
    }
  }, [tooltip]);

  const classNameTooltip = classNames({
    tooltip: true,
    success: tooltip.type === "success",
    error: tooltip.type === "error",
    closed: !tooltip.type,
  });

  return (
    <div
      className={classNames({
        "app-layout": true,
        edit: viewTooltip,
      })}
    >
      <NavBar page={page} />
      <Header />
      <section className="main">
        <h1 className="title">{title}</h1>
        <div className={classNameTooltip}>
          <span>
            <Check />
            <TooltipText
              entity={entity}
              kind={kind}
              tooltip={tooltip}
              id={id ?? entityId}
            />
          </span>
          <button type="button" onClick={() => dispatch(setTooltip("", ""))}>
            <Delete />
          </button>
        </div>
        {children}
      </section>
      <Footer />
    </div>
  );
};

export default AppLayout;

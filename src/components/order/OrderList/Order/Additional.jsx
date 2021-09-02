import React from "react";
import classNames from "classnames";
import { additional } from "../../../../reducers/data/dataOrder";

const Additional = ({ order }) => {
  return (
    <div className="additional">
      {additional.map((item) => (
        <label
          key={item.name}
          className={classNames({
            active: order[item.key],
          })}
          htmlFor={item.name}
        >
          <input
            type="checkbox"
            name="additional"
            id={item.name}
            value={item.name}
            readOnly
          />
          {item.name}
          <span className="check-mark" />
        </label>
      ))}
    </div>
  );
};

export default Additional;

import React, { useEffect, useState } from "react";
import classNames from "classnames";
import "./pagination.scss";
import { getPaginateNumber } from "../../../actions/pagination";

const Pagination = ({ paginate, orders, page }) => {
  const [text, setText] = useState([]);
  useEffect(() => {
    setText(getPaginateNumber(page, orders));
  }, [orders.length, page]);

  return text.length ? (
    <div className="pagination">
      «
      {text.map((item) =>
        item !== 0 ? (
          <button
            type="button"
            className={classNames({
              active: item === page,
            })}
            onClick={() => paginate(item)}
            key={item}
          >
            {item}
          </button>
        ) : (
          "..."
        )
      )}
      »
    </div>
  ) : (
    ""
  );
};

export default Pagination;

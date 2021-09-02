import React, { useEffect, useState } from "react";
import classNames from "classnames";
import "./pagination.scss";
import { getPaginateNumber } from "../../../actions/pagination";

const Pagination = ({ paginate, orders, page, prev, next }) => {
  const [text, setText] = useState([]);
  useEffect(() => {
    setText(getPaginateNumber(page, orders));
  }, [orders.length, page]);

  if (!text.length) return null;

  return (
    <div className="pagination">
      <button type="button" onClick={() => prev(page)}>
        «
      </button>
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
      <button type="button" onClick={() => next(page)}>
        »
      </button>
    </div>
  );
};

export default Pagination;

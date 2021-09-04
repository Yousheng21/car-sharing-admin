import React, { useEffect, useState } from "react";
import classNames from "classnames";
import "./pagination.scss";
import { getPaginateNumber } from "../../../../actions/pagination";

const Pagination = ({ paginate, orders, page, prev, next, perPage }) => {
  const [text, setText] = useState([]);
  useEffect(() => {
    setText(getPaginateNumber(page, Math.ceil(orders.length / perPage)));
  }, [orders.length, page]);

  if (!text.length) return null;

  return (
    <div className="pagination">
      <button type="button" onClick={() => prev(page)}>
        «
      </button>
      {text.map((item) =>
        item !== "..." ? (
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
          item
        )
      )}
      <button type="button" onClick={() => next(page)}>
        »
      </button>
    </div>
  );
};

export default Pagination;

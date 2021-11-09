import React from "react";
import classNames from "classnames";
import "./pagination.scss";

const Pagination = ({ paginate, text, page, prev, next }) => {
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

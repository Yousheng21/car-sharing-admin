import React, { useEffect, useState } from "react";
import Filters from "./Filters/Filters";
import Pagination from "./Pagination/Pagination";

const EntitiesLayout = ({
  children,
  dataForm,
  setDataForm,
  entities,
  setEntities,
  dropdown,
  className,
  orderPerPage,
  handleClick,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const indexOfLastOrder = currentPage * orderPerPage;
    const indexOfFirstOrder = indexOfLastOrder - orderPerPage;
    setEntities(entities.slice(indexOfFirstOrder, indexOfLastOrder));
  }, [entities, currentPage]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const next = (pageNumber) => {
    if (currentPage < entities.length / orderPerPage)
      setCurrentPage(pageNumber + 1);
    else setCurrentPage(1);
  };

  const prev = (pageNumber) => {
    if (currentPage > 1) setCurrentPage(pageNumber - 1);
    else setCurrentPage(Math.ceil(entities.length / orderPerPage));
  };

  const handleChange = (event) => {
    const { value, name } = event.currentTarget;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  return (
    <main className={className}>
      <Filters
        handleChange={handleChange}
        handleClick={handleClick}
        dataForm={dataForm}
        dropdown={dropdown}
        paginate={paginate}
      />
      {children}
      <Pagination
        page={currentPage}
        orders={entities}
        perPage={orderPerPage}
        next={next}
        prev={prev}
        paginate={paginate}
      />
    </main>
  );
};

export default EntitiesLayout;

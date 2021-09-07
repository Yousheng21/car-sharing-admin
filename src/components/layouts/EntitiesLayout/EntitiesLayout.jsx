import React, { useEffect, useState } from "react";
import Filters from "./Filters/Filters";
import Pagination from "./Pagination/Pagination";
import Preloader from "../../common/Preloader/Preloader";

const EntitiesLayout = ({
  children,
  dataForm,
  setDataForm,
  entities,
  storeEntities,
  setEntities,
  dropdown,
  className,
  perPage,
  handleClick,
  reset,
  titleLoader,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const indexOfLastOrder = currentPage * perPage;
    const indexOfFirstOrder = indexOfLastOrder - perPage;
    setEntities(entities.slice(indexOfFirstOrder, indexOfLastOrder));
  }, [entities, currentPage]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const next = (pageNumber) => {
    if (currentPage < entities.length / perPage) setCurrentPage(pageNumber + 1);
    else setCurrentPage(1);
  };

  const prev = (pageNumber) => {
    if (currentPage > 1) setCurrentPage(pageNumber - 1);
    else setCurrentPage(Math.ceil(entities.length / perPage));
  };

  const handleChange = (event) => {
    const { value, name } = event.currentTarget;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const resetFilters = () => {
    setDataForm(
      Object.fromEntries(Object.entries(dataForm).map(([key]) => [key, ""]))
    );
    reset();
  };

  return (
    <main className={className}>
      <Filters
        handleChange={handleChange}
        handleClick={handleClick}
        resetFilters={resetFilters}
        dataForm={dataForm}
        dropdown={dropdown}
        paginate={paginate}
      />
      {!storeEntities.length ? <Preloader title={titleLoader} /> : children}
      <Pagination
        page={currentPage}
        orders={entities}
        perPage={perPage}
        next={next}
        prev={prev}
        paginate={paginate}
      />
    </main>
  );
};

export default EntitiesLayout;

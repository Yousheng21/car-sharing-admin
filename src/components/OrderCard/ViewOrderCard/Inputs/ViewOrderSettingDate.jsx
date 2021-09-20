import React, { useEffect } from "react";
import InputDate from "../../../common/Input/InputDate/InputDate";

const ViewOrderSettingDate = ({ dataForm, handleDataForm }) => {
  const { dateFrom, dateTo } = dataForm;

  function handleDateFrom(date) {
    handleDataForm("dateFrom", date.getTime());
  }

  useEffect(() => {
    const nextDate = new Date(dateFrom);
    nextDate.setMinutes(nextDate.getMinutes() + 30);
    if (dateTo <= dateFrom) {
      handleDataForm("dateTo", nextDate.getTime());
    }
  }, [dateFrom]);

  function handleDateTo(date) {
    handleDataForm("dateTo", date.getTime());
  }

  const filterPassedTimeTo = (time) => {
    const selectedDate = new Date(time);
    return selectedDate.getTime() > dateFrom.getTime();
  };
  return (
    <div>
      <h1>Дата аренды</h1>
      <div className="extra-date">
        <section className="city-content">
          <span>С</span>
          <InputDate
            onChange={handleDateFrom}
            onClose={() => handleDataForm("dateFrom", 0)}
            selected={dateFrom}
            popperPlacement="top-start"
          />
        </section>
        <section className="city-content">
          <span>По</span>
          <InputDate
            onChange={handleDateTo}
            onClose={() => handleDataForm("dateTo", 0)}
            minDate={dateFrom}
            selected={dateTo}
            filterTime={filterPassedTimeTo}
            popperPlacement="top-start"
            disabled={!dateFrom}
          />
        </section>
      </div>
      {/* {!dateIsValid ? "Выберите правильную продолжительность аренды" : ""} */}
    </div>
  );
};

export default ViewOrderSettingDate;

import React, { useEffect } from "react";
import InputDate from "../../../common/Input/InputDate/InputDate";

const ViewOrderSettingDate = ({ dataForm, handleDataForm }) => {
  const { dateFrom, dateTo } = dataForm;

  function handleDateFrom(date) {
    handleDataForm("dateFrom", date.getTime(), true);
  }

  useEffect(() => {
    if (dateFrom.value) {
      const nextDate = new Date(dateFrom.value);
      nextDate.setMinutes(nextDate.getMinutes() + 30);
      if (dateTo.value < dateFrom.value) {
        handleDataForm("dateTo", nextDate.getTime(), true);
      }
    }
  }, [dateFrom.value]);

  function handleDateTo(date) {
    handleDataForm("dateTo", date.getTime(), true);
  }

  const filterPassedTimeTo = (time) => {
    const selectedDate = new Date(time);
    return selectedDate.getTime() > new Date(dateFrom.value).getTime();
  };
  return (
    <div className="date-range">
      <div>
        <section className="city-content">
          <h5>С</h5>
          <InputDate
            onChange={handleDateFrom}
            onClose={() => handleDataForm("dateFrom", 0)}
            selected={dateFrom.value}
            popperPlacement="bottom-start"
          />
        </section>
        <section className="city-content">
          <h5>По</h5>
          <InputDate
            onChange={handleDateTo}
            onClose={() => handleDataForm("dateTo", 0)}
            minDate={dateFrom.value}
            selected={dateTo.value}
            filterTime={filterPassedTimeTo}
            popperPlacement="bottom-start"
            disabled={!dateFrom.value}
          />
        </section>
      </div>
      <span className="error">
        {!!dateFrom.value &&
          !dateFrom.inputValid &&
          "Выберите правильную продолжительность аренды"}
      </span>
    </div>
  );
};

export default ViewOrderSettingDate;

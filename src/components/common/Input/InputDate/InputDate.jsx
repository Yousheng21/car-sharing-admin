import React from "react";
import DatePicker from "react-datepicker";
import ru from "date-fns/locale/ru";
import "react-datepicker/dist/react-datepicker.css";

const InputDate = ({
  minDate,
  onChange,
  onClose,
  filterTime,
  popperPlacement = "bottom-start",
  selected,
  disabled,
}) => {
  return (
    <div className="extra-date-range">
      <DatePicker
        popperPlacement={popperPlacement}
        wrapperClassName="inp"
        minDate={minDate}
        selected={selected}
        onChange={onChange}
        timeInputLabel="Time:"
        filterTime={filterTime}
        showTimeSelect
        dateFormat="Pp"
        timeFormat="p"
        timeIntervals={15}
        locale={ru}
        disabled={disabled}
      />
      <button type="button" onClick={onClose} className="btn-close open">
        {}
      </button>
    </div>
  );
};

export default InputDate;

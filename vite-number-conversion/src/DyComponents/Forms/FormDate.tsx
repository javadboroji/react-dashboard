import React, { useState } from "react";
import type { DatePickerProps } from "antd";
import DatePicker from "react-multi-date-picker";
import { datePickerTypes } from "./Form.Type";
import type { Value } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "./Form.style.css";
function FormDate(props: datePickerTypes) {
  const [value, setValue] = useState<Value>("");
  return (
    <div className="flex flex-col relative  w-full">
      <span className="date-picker-lable text-black ">
        {" "}
        {props.placeholder}
      </span>
      <DatePicker
        style={{ width: "100%" }}
        inputClass="datePicker-input h-full py-4"
        value={value}
        onChange={setValue}
        calendar={persian}
        locale={persian_fa}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default FormDate;

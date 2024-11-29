import React, { useState } from "react";
import { Select } from "antd";

type option = {
  value: string | number;
  label: string;
};
type AntSelectCProps = {
  options: option[];
  placeholder?: string;
};
function AntSelectC(props: AntSelectCProps) {
  const [valSelect, setValSelect] = useState("");
  const onChange = (value: string) => {
      setValSelect(value);
    
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };
  return (
    <Select
      className="w-full !h-full flex"
      value={valSelect}
      showSearch
      placeholder={props.placeholder || ""}
      optionFilterProp="label"
      onChange={onChange}
      onSearch={onSearch}
      options={props.options}
  
    />
  );
}

export default AntSelectC;

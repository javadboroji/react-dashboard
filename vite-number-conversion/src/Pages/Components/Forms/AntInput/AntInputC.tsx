import { Input } from "antd";
import React from "react";

const { TextArea } = Input;
type AntInputCProsp = {
  inpType: "input" | "textera";
  placeholder: string;
  name: string;
  type: string;
  value?: string | number;
  maxLength?: number;
  onchange?: () => void;
};
function AntInputC(props: AntInputCProsp) {
  if (props.inpType === "input") {
    return (
      <Input
        placeholder={props.placeholder}
        name={props.name}
        type={props.type}
        className="!h-full"
      />
    );
  } else {
    <TextArea
   
      maxLength={props.maxLength}
      placeholder={props.placeholder}
      name={props.name}
      autoSize={{ minRows: 3, maxRows: 5 }}
    />;
  }
}

export default AntInputC;

import React, { useState } from "react";
import { Modal } from "antd";

type modalType = {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: JSX.Element
}
function CusModal({ open, setOpen, data }: modalType) {

  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>

      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width={"70rem"}
        okText={"ذخیره"}
        cancelText={"لغو"}
      
      >
        {data}
      </Modal>
    </>
  );
}

export default CusModal;

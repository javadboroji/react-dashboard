import React, { useEffect, useState } from "react";
import { Button, Col, Flex, Modal, Row } from "antd";
import FormText from "../../../DyComponents/Forms/FormText";
import FormSelect from "../../../DyComponents/Forms/FormSelect";
import CusModal from "../../../DyComponents/LocalComponents/CusModal";
import { useGetRoles } from "../../../Hooks";
import ButtonsBas from "../../Components/Buttons/Buttons.basick";
import Buttons from "../../../DyComponents/Buttons/Buttons";

type modalPrps = {
  intialData: any;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleCancel: () => void;
  handleOk: () => void;
};
interface IRoleType {
  roleName: string;
  rolePerName: string;
  roleType: number;
}
const NewUserForm: React.FC<modalPrps> = ({
  isModalOpen,
  handleCancel,
  handleOk,
  setIsModalOpen,
  intialData,
}) => {
  const { data } = useGetRoles();
  const roles = data?.map((role: IRoleType) => ({
    key: role.roleType,
    value: role.rolePerName,
  }));
  useEffect(() => {
    console.log(intialData);
  }, [intialData]);

  return (
    <>
      <CusModal title="کاربر جدید" setOpen={setIsModalOpen} open={isModalOpen}>
        <div className="container">
          <Row gutter={[8, 8]}>
            <Col xs={24} lg={12}>
              {" "}
              <FormText
                style="p-3"
                placeholder="نام کاربری"
                defaultValue={intialData?.userName}
              />
            </Col>

            <Col xs={24} lg={12}>
              {" "}
              <FormText
                style="p-3"
                placeholder=" ایمیل"
                type="email"
                defaultValue={intialData?.email}
              />
            </Col>
            <Col xs={24} lg={12}>
              {" "}
              <FormSelect
                style="w-full h-12"
                options={roles || []}
                inputLable="نقش"
              />
            </Col>

          </Row>
          <div className="flex justify-end">
          <Buttons text="ذخیره"  />
          </div>
        </div>
      </CusModal>
    </>
  );
};

export default NewUserForm;

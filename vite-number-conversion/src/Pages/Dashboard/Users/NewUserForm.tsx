import React, { useState } from "react";
import { Button, Col, Flex, Modal, Row } from "antd";
import FormText from "../../../DyComponents/Forms/FormText";
import FormSelect from "../../../DyComponents/Forms/FormSelect";
import CusModal from "../../../DyComponents/LocalComponents/CusModal";
import { useGetRoles } from "../../../Hooks";

type modalPrps = {
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
}) => {
  const { data } = useGetRoles();
  const roles = data?.map((role: IRoleType) => ({
    key: role.roleType,
    value: role.rolePerName,
  }));
  return (
    <>
      <CusModal title="کاربر جدید" setOpen={setIsModalOpen} open={isModalOpen}>
        <div className="container">
          <Row gutter={[8, 8]}>
            <Col xs={24} lg={12}>
              {" "}
              <FormText style="p-3" placeholder="نام کاربری" />
            </Col>
            <Col xs={24} lg={12}>
              <FormText style="p-3" placeholder="آیدی کاربری" />
            </Col>
            <Col xs={24} lg={12}>
              {" "}
              <FormText style="p-3" placeholder=" ایمیل" type="email" />
            </Col>
            <Col xs={24} lg={12}>
              <FormText style="p-3" placeholder=" پسورد" type="password" />
            </Col>
            <Col xs={24} lg={12}>
              {" "}
              <FormText style="p-3" placeholder=" شماره تلفن" type="number" />
            </Col>
            <Col xs={24} lg={12}>
              {" "}
              <FormSelect
                style="w-full h-12"
                options={roles || []}
                inputLable="نقش"
              />
            </Col>
            <Col xs={24} lg={24}>
              <FormText style="py-6" placeholder="توضییحات" />
            </Col>
          </Row>
        </div>
      </CusModal>
    </>
  );
};

export default NewUserForm;

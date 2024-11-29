import React, { useEffect, useState } from "react";
import ActionsButtons from "./ActionsButtons";
import NewUserForm from "./NewUserForm";
import CusGrid from "../../../DyComponents/LocalComponents/CusGrid";
import { columnUserType } from "../../../Types/Types";
import { useGetUsers } from "../../../Hooks";
import DashboardLayout from "../../Components/DashboardLayout/DashboardLayout";
import { Button } from "antd";

function UsersList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowSelect, setRowSelect] = useState<any>(null);
  const { data } = useGetUsers();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //column
  const columns: columnUserType[] = [
    {
      title: "نام کاربری",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "تصویرکاربر",
      dataIndex: "image",
      key: "image",
      render: (imageUrl: string) => <img src={imageUrl} alt={imageUrl} />,
    },
    {
      title: " آیدی",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "ایمیل",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "نقش",
      key: "role",
      dataIndex: "role",
    },
    {
      title: "عملیات",
      key: "action",
      dataIndex: "action  ",
      render: (render: any) => (
        <>
          <Button type-btn="edit" onClick={()=>setIsModalOpen(true)}>
            {" "}
            ویرایش
          </Button>
       
            <Button  type-btn="delete">
              {" "}
              حذف
            </Button>
          
        </>
      ),
    },
  ];

  useEffect(() => {}, [isModalOpen]);

  return (
    <DashboardLayout>
      <div className="p-4">
        <ActionsButtons showModal={showModal} />
      </div>
      <div className="flex">
        {isModalOpen && (
          <NewUserForm
          intialData={rowSelect}
            handleOk={handleOk}
            handleCancel={handleCancel}
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
          />
        )}
      </div>
      <div className=" w-full">
        <CusGrid data={data || []} columns={columns} rowSelect={rowSelect} setRowSelect={setRowSelect}/>
      </div>
    </DashboardLayout>
  );
}

export default UsersList;

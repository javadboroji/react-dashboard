import React from "react";
import HeaderLayout from "../../../DyComponents/Header/HeaderLayout";
import SideBar from "../../../DyComponents/SideBar/SideBar";

function DashboardLayout({children}:{children:React.ReactNode}) {
  return (
    <div className="flex flex-col w-full">
      <HeaderLayout />
      <div className="flex">
        <SideBar />
        <div className="flex-1">
            {children}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;

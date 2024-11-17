import React from "react";
import HeaderCards from "./HeaderCards/HeaderCards";
import TasksContainer from "./Tasks/TasksContainer";
import ActiveProjects from "./ActiveProjects/ActiveProjects";
import Chats from "./Chats/Chats";
import BestSelling from "./BestSelling/BestSelling";
import DashboardLayout from "../Components/DashboardLayout/DashboardLayout";

function Dashboard() {
  return (
    <DashboardLayout>
      <HeaderCards />
      <div className="flex ">
        <TasksContainer />
        <ActiveProjects />
      </div>
      <div className="flex">
        <Chats />
        <BestSelling />
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;

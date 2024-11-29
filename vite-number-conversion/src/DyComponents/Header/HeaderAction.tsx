import { IoIosSettings } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import useGetUserInfo from "../../Hooks/getUser";
import useUserLogin from "../../store/UserAuth";
HeaderAction.propTypes = {};

function HeaderAction() {
  const {user} = useUserLogin();
  return (
    <div className={"flex  justify-between w-[95%]"}>
      <div className={"flex items-center"}>
        <button className={"bg-Navy-blue border-0 focus:outline-0"}>
          {" "}
          <IoIosSettings color={"#fff"} fontSize={24} />
        </button>
        <button className={"bg-Navy-blue border-0 focus:outline-0"}>
          {" "}
          <IoIosNotifications color={"#fff"} fontSize={24} />
        </button>
        <button className={"bg-Navy-blue border-0 focus:outline-0"}>
          {" "}
          <MdEmail color={"#fff"} fontSize={24} />
        </button>
      </div>  
      <div className={"flex w-40 items-center"}>
        <div className={"w-16 h-16 rounded-full bg-white "}>
     
        </div>
        <div className={"flex flex-col "}>
          <p className={"text-wihte text-balance"}> {user?.userName}</p>
          <span className={"text-wihte text-base"}> {user?.email}</span>
        </div>
      </div>
    </div>
  );
}

export default HeaderAction;

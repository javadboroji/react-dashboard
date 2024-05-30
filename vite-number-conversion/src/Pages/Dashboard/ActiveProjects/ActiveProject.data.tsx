import { columnProductType } from "../../../Types/Types"
import { Flex, Progress } from 'antd';
import userImageI from "../../../../public/images/us-1.jpg";
import userImageII from "../../../../public/images/us-2.jpg";
import userImageIII from "../../../../public/images/us-3.jpg"

type activePrType = {
    projectName: string,
    projectLead: string,
    progress: any,
    assign: string[],
    status: any,
    dueDate: string
}
type tableCuType = {
    title: string,
    dataIndex: string,
    key: string,
    render?: any
}
export const activeProjectData: activePrType[] = [
    {
        projectName: 'پروژه 10',
        projectLead: 'جواد بروجی',
        progress: 50,
        assign: [userImageI, userImageII, userImageIII],
        status: 'active',
        dueDate: ''
    },
    {
        projectName: 'پروژه 1',
        projectLead: 'رضا رضایی',
        progress: 70,
        assign: [userImageI, userImageII, userImageIII],
        status: 'pend',
        dueDate: ''
    },
    {
        projectName: 'پروژه پارسیان',
        projectLead: 'احمدنصرتی ',
        progress: 20,
        assign: [ userImageII,userImageI, userImageIII],
        status: 'active',
        dueDate: ''
    },
    {
        projectName: 'پروژه sn',
        projectLead: 'مینازاسکندری ',
        progress: 90,
        assign: [ userImageII,userImageI, userImageIII],
        status: 'active',
        dueDate: ''
    }

]

export const activeProjectCol: tableCuType[] = [
    {
        title: 'نام پروژه',
        dataIndex: 'projectName',
        key: 'projectName'
    },
    {
        title: 'سرپرست  پروژه',
        dataIndex: 'projectLead',
        key: 'projectLead'
    },
    {
        title: 'زمان ',
        dataIndex: 'progress',
        key: 'progress',
        render: (value:number) => {
            return (
                <Progress percent={value} status="active" />
            )
        }
    },
    {
        title: 'اعضا پروژه',
        dataIndex: 'assign',
        key: 'assign',
        render: (item: any) => <div className="flex relative  w-full h-full">
            {item.map((image: string, i: any) => 
            i<4&& <img key={i} src={image} alt={image} className={`rounded-full  top-0  w-8 h-8 left-[${i+10}%]}` }/>)}
            </div>

    },
    {
        title: 'وضعیت پروژه',
        dataIndex: 'status',
        key: 'status',
        render:(status:string)=>(
            <span className={`p-2 rounded-2xl text-xs ${status==='active'? 'text-sucess-text bg-sucess-text bg-opacity-5':'text-orang-100 bg-orang-100 bg-opacity-5'}`}>{status==='active'?'درحال انجام':'متوقف'}</span>
        )
    },
    {
        title: 'تاریخ اتمام پروژه',
        dataIndex: 'dueDate',
        key: 'dueDate'
    }
]

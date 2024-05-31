import { v4 as uuidv4 } from 'uuid';
import profile1 from '../../../../public/images/us-1.jpg';
import profile2 from '../../../../public/images/us-2.jpg';

type chatMessageType={
    userName:string,
    id:string,
    message:string,
    profile:string,
    role:string
}
export const chatMessage:chatMessageType[]=[
    {
        userName:"علی حسنی",
        id:uuidv4(),
        message:' سلام وقت بخیر',
        profile:profile1,
        role:'user'
    },
    {
        userName:" احسان",
        id:uuidv4(),
        message:' سلام  بفرمایید',
        profile:profile2,
        role:'admin'
    },
    {
        userName:"علی حسنی",
        id:uuidv4(),
        message:'جلسه پروژهsn ساعت چنده؟',
        profile:profile1,
        role:'user'
    },
    {
        userName:" احسان",
        id:uuidv4(),
        message:' ساعت 16:00',
        profile:profile2,
        role:'admin'
    },
];

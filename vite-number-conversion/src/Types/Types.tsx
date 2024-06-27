export type rowProductType ={
  _id:string,
    key: string;
    name: string;
    category: string;
    count: number | any;
    price: number | any;
  }
  export type columnProductType={
    title:string,
    dataIndex: string,
    key: string,
    render?:(props:any)=>any
  }
export type columnUserType={
    title:string,
    dataIndex:string,
    key:string,
    render?:any
}
export type rowUserType={
    name:string,
    id:string,
    email:string,
    password:string,
    phone:number,
    role:string,
    description:string,
    image:string
}
export type taskType={
  id:string,
  title:string,
  done:boolean,
  date:string
}
export type personLogin={
  userName:string,
  password:string
}


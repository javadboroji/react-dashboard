const useGetUserInfo=()=>{
   const user= JSON.parse(localStorage.getItem("useInfo") as string) 
   return user
}
export default useGetUserInfo
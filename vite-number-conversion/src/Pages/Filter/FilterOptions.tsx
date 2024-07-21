
type FilterOptionsType={
   children: React.ReactNode
}
const FilterOptions:React.FC<FilterOptionsType>=({children})=> {
  return (
    <div className='w-full p-2 border-2 rounded-lg bg-slate-50 my-4'>{children}</div>
  )
}

export default FilterOptions
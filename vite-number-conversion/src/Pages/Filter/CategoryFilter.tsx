import React, { useState } from 'react'
import { Checkbox } from 'antd';
import type { CheckboxProps, GetProp } from 'antd';
import { useGetCategoryList } from '../../Hooks';
import { FilterProductBodyType } from './Filter';
type CategoryFilterProps = {
  setBodyValue: React.Dispatch<React.SetStateAction<FilterProductBodyType>>,
}
interface CategoryIn {
  EnTitle: string,
  PeTitle: string,
  _id: string
}
const CategoryFilter: React.FC<CategoryFilterProps> = ({ setBodyValue }) => {
  const { data } = useGetCategoryList();
  const [categoryChecked, setCategoryChecked] = useState({ id: "", EnTitle: "" })
  const onChange = (id: string, EnTitle: string) => {
    setCategoryChecked({ id: id, EnTitle: EnTitle });
    setBodyValue(prev => ({ ...prev, category: EnTitle }))

  };
  return (
    <div className='flex flex-col '>
      {
        data?.map((category: CategoryIn) => {
          return (
            <Checkbox
              key={category._id}
              className='my-2 px-4'
              onChange={() => onChange(category._id, category.EnTitle)}
              checked={category._id === categoryChecked.id ? true : false}
            >
              {category.PeTitle}
            </Checkbox>
          )
        }
        )

      }
    </div>
  )
}

export default CategoryFilter
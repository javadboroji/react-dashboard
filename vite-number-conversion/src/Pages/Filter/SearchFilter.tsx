import { Button, Input, InputRef } from 'antd'
import React, { useEffect, useRef } from 'react'
import { useGetProductsFilter } from '../../Hooks';
import { MutateFunction } from '@tanstack/react-query';
import { FilterProductBodyType } from './Filter';
import { FaSearchengin } from 'react-icons/fa6';
import { BiSearch } from 'react-icons/bi';
import { CiSearch } from 'react-icons/ci';
type SearchFilterPropsType = {
    inpRef: any;
    setBodyValue: React.Dispatch<React.SetStateAction<FilterProductBodyType>>,
}
const SearchFilter: React.FC<SearchFilterPropsType> = ({ inpRef, setBodyValue }) => {

    const searchBtnHandler = () => {
        setBodyValue(prev => ({ ...prev, searchTerm: inpRef.current.input.value }))
    }


    return (
        <div className='relative'>
            <Input ref={inpRef} className='p-2' />
            <Button className='absolute top-[10%] left-1 bg-transparent border-0' onClick={searchBtnHandler} >
                <CiSearch size={24} />
            </Button>

        </div>
    )
}

export default SearchFilter
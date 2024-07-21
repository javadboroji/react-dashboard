import React, { useState } from 'react'
import { InputNumberProps, Slider, Switch } from 'antd';
function PriceFilter() {
  const [filterComplateValue, setFilterComplateValue] = useState<number[]>([])

    const onChangeComplete = (value:number[]) => {
        console.log('onChangeComplete: ', value);
        setFilterComplateValue(value)
    };
    return (
        <div>
            <Slider
                range
                step={100000}
                defaultValue={[1000000, 50000]}
                min={150000}
                max={10000000}
                //onChange={onChange}
                onChangeComplete={onChangeComplete}
            />
            <div className='flex items-center justify-between'>
                <span className='px-2'> از :  {filterComplateValue[0]?.toLocaleString()}</span>
                <span className='px-2'> تا :  {filterComplateValue[1]?.toLocaleString()}</span>
            </div>
        </div>
    )
}

export default PriceFilter
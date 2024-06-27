import React from 'react';
import { Flex, Spin } from 'antd';
const LoadingSpiner = () => {
 
  
  return (
    <Flex align="center" gap="middle" className='absolute top-[50%] left-[50%] -translate-x-1/2 '>
    <Spin size="large" />
  </Flex>

  );
};
export {LoadingSpiner}
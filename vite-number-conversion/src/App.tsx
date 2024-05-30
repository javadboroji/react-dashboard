import { useState } from 'react'
import './App.css'
import { ConfigProvider, Layout,Input, InputProps } from 'antd';
import styled from 'styled-components';
import fa_IR from "antd/es/locale/fa_IR";
import locale from "antd/es/date-picker/locale/fa_IR";
import AdminRoute from './Routes/AdminRoute.tsx';
import dayjs from 'dayjs';

function App() {
  dayjs.locale('fa_IR');

  return (
      <ConfigProvider 
      direction="rtl"
      locale={fa_IR}  
      theme={{
        components: {
          Button: {
            colorPrimary: '#00b96b',
          
          },
          Input: {
            paddingInline:12,
            paddingBlock:12
          },
          DatePicker:{
            paddingInline:24,
            paddingBlock:24,
          
          },
      
        },
      }}
      >
        
        <AdminRoute/>
      </ConfigProvider>
  )
}

export default App

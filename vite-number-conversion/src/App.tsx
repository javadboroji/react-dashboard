import './App.css'
import { ConfigProvider } from 'antd';
import fa_IR from "antd/es/locale/fa_IR";
import AdminRoute from './Routes/AdminRoute.tsx';
import dayjs from 'dayjs';
import { AppProvider } from './Context/UserProvider.tsx';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
function App() {
  dayjs.locale('fa_IR');
  const queryClient = new QueryClient()


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
            paddingInline: 12,
            paddingBlock: 12
          },
          DatePicker: {
            paddingInline: 24,
            paddingBlock: 24,

          },

        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <AdminRoute />
        </AppProvider>

      </QueryClientProvider>
    </ConfigProvider>
  )
}

export default App

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme:{
  extend:{
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
    },
    colors:{
      'blue-50':'#48cae4 ',
      'Navy-blue':'#00406c',
      'orang-100':'#fb8500',
      'blue-light':'#caf0f8',
      'black':'#023047',
      'wihte':'#fff',
      'gray-bg':'#3a506b',
      'border-gray':'#f2f2f2',
      'sucess-text':'rgb(58, 201, 119)',
      'primary': '#0D99FF',
      'dark':'#6e6e6e'
    },
    fontFamily:{iranSans:'iranSans'}
  } 
   
  },
  plugins: [],
}


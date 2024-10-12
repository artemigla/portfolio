import { useState } from 'react';
import ToggleSwitch from 'react-switch';

export const Header = () => {

  const [theme, setTheme] = useState<string>("ligth");

  const toggleTheme = () => setTheme((curr: string) => (curr === "ligth" ? "dark" : "ligth"));

  return (
    <header className='grid grid-cols-3 h-32 w-full bg-[#171717]'>
      <div className="relative flex items-center">
        <svg className='flex overflow-visible rotate-[110deg] ml-7' width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            <circle id='text' cx="50" cy="50" r="50" fill="gold" />
            <text fill='white'>
              <textPath href='#text' className='text-red-700 text-[28px] font-bold'>Front - end Developer</textPath>
            </text>
          </g>
          <path d="M50 0L61.2257 34.5491H97.5528L68.1636 55.9017L79.3893 90.4509L50 69.0983L20.6107 90.4509L31.8364 55.9017L2.44717 34.5491H38.7743L50 0Z" fill="black" />
          <path d="M50 100L38.7743 65.4509H2.44717L31.8364 44.0983L20.6107 9.54915L50 30.9017L79.3893 9.54915L68.1636 44.0983L97.5528 65.4509H61.2257L50 100Z" fill="black" />
        </svg>
      </div>
      <div className="inline-block m-auto text-white font-lobster scale-110 text-[36px]">P o r t f o l i o</div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 h-16 w-[50%] ml-auto">
          <div className='relative m-auto'>
            <ToggleSwitch className='mt-[10px]' onChange={toggleTheme} checked={theme === "ligth"} />
          </div>
          <div className="text-white m-auto ">EN / UA</div>
        </div>
      </div>
    </header>
  )
}
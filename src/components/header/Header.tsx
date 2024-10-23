import { useContext } from 'react';
import style from './style.module.css';
import { ThemeContext } from '../../context/ThemeContext';
import { ThemeToggle } from '../themeToggle/ThemeToggle';
import usa from '../../assets/usa.svg';
import ukraine from '../../assets/ukraine.svg';

export const Header = () => {

  const { darkTheme } = useContext(ThemeContext);

  return (
    <header className={`${style.container} ${darkTheme ? "light-theme" : "dark-theme"}`}>
      <div className={style.leftblock}>
        <svg className={style.logosvg} width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            <circle id='text' cx="50" cy="50" r="50" fill="gold" />
            <text fill={`${darkTheme ? "#000" : "#FFF"}`}>
              <textPath href='#text' className={style.logotext}>Front - end Developer</textPath>
            </text>
          </g>
          <path d="M50 0L61.2257 34.5491H97.5528L68.1636 55.9017L79.3893 90.4509L50 69.0983L20.6107 90.4509L31.8364 55.9017L2.44717 34.5491H38.7743L50 0Z" fill="black" />
          <path d="M50 100L38.7743 65.4509H2.44717L31.8364 44.0983L20.6107 9.54915L50 30.9017L79.3893 9.54915L68.1636 44.0983L97.5528 65.4509H61.2257L50 100Z" fill="black" />
        </svg>
      </div>
      <div className={`${darkTheme ? "light-theme" : "dark-theme"} ${style.centerblock}`}>P o r t f o l i o</div>
      <div className={style.rightblock}>
        <div className={style.rightcontent}>
          <div className='relative flex items-center'>
            <ThemeToggle />
          </div>
          <div className={`${darkTheme ? "light-theme" : "dark-theme"} flex w-20 justify-around transition duration-300 ease-in-out`}>
            <img src={usa} alt="usa flag" width={32} height={32} onClick={() => console.log("Click")}/>
            <img src={ukraine} alt="ukraine flag" width={32} height={32} onClick={() => console.log("Click")}/>
          </div>
        </div>
      </div>
    </header>
  )
}
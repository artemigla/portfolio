import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import style from './style.module.css';

export const Content = () => {

    const {darkTheme} = useContext(ThemeContext);
    
  return (
    <main className={`${style.container} ${darkTheme ? "light-theme" : "dark-theme"}`}>
        Content
    </main>
  )
}

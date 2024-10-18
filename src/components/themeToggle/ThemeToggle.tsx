import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import ToggleSwitch from 'react-switch';

export const ThemeToggle = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <ToggleSwitch
        height={21}
        width={43}
        onChange={toggleTheme}
        checked={darkTheme}
        offColor="#058ef7"
        onColor="#058ef7"
        handleDiameter={17}
        uncheckedIcon={false}
        checkedIcon={false}
      />
    </>
  );
};
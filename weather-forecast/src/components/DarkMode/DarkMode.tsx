import { ChangeEventHandler } from "react";
import "./DarkMode.css";
const DarkMode = ({ onToggle, darkDefault }: any) => {
  return (
    <div className="toggle-theme-wrapper">
      <span>☀️</span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={onToggle}
          defaultChecked={darkDefault}
        />
        <div className="slider round"></div>
      </label>
      <span>🌒</span>
    </div>
  );
};

export default DarkMode;

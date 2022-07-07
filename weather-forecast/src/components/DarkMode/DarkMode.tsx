import "./DarkMode.css";
const DarkMode = ({ onToggle, darkDefault }: any) => {
  return (
    <div className="toggle-theme-wrapper">
      <span className="sun-icon">☀️</span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={onToggle}
          defaultChecked={darkDefault}
        />
        <div className="slider round"></div>
      </label>
      <span className="moon-icon">🌒</span>
    </div>
  );
};

export default DarkMode;

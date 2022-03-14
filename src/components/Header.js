import { ReactComponent as WhiteThemeToggle } from "../images/icon-sun.svg";
import { ReactComponent as DarkThemeToggle } from "../images/icon-moon.svg";

const Header = ({ setDarkTheme, darkTheme }) => {
  return (
    <header>
      <a href="" className="logo">
        Todo
      </a>
      <button className="theme-switch-container" onClick={() => setDarkTheme(!darkTheme)}>
        {darkTheme ? <WhiteThemeToggle /> : <DarkThemeToggle />}
      </button>
      <div className="bg-img"></div>
    </header>
  );
};

export default Header;

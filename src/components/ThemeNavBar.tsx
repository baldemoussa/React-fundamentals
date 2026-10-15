import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function ThemeNavBar() {
  const { theme, toggle } = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
  };

  return (
    <nav style={styles}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>
          <button onClick={toggle}>
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default ThemeNavBar;
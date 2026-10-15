import { useContext, type ReactNode } from "react";
import ThemeContext from "../context/ThemeContext";

interface LayoutProps  {
    children: ReactNode
}
function Layout({children}: LayoutProps) {

  const { theme } = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
  };

  return (
    <section style={styles}>
      {children}
    </section>
  );
}

export default Layout;
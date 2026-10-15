import { createContext } from "react";

interface ThemeContextType {
  theme: string;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export default ThemeContext;
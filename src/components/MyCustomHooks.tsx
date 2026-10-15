import useWindowSize from "../hooks/useWindowSize";
import useLocalStorage from "../hooks/useLocalStorage";

function MyCustomHooks() {
    const { width, height } = useWindowSize();
    const [theme, setTheme] = useLocalStorage<string>("theme", "light");

    return (
        <div>
            <p>Window Size: {width} x {height}</p>
            <p>Theme: {theme}</p>
            <button onClick={() => setTheme("dark")}>Switch to Dark Theme</button>
        </div>
    );
}

export default MyCustomHooks;
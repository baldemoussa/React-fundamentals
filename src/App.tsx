import { useMemo, useState } from "react";
import ThemeContext from "./context/ThemeContext";
import ThemeNavBar from "./components/ThemeNavBar";
import Layout from "./components/Layout";


function App() {

    const [theme, setTheme] = useState('light');
    const toggle = () => setTheme(p => p === 'light' ? 'dark':'light');

    // const themeValues = useMemo(() => {
    //     const toggle = () => setTheme(p => p === 'light' ? 'dark':'light');
    //     return {theme, toggle}
    // }, [theme])

    return (
        <ThemeContext.Provider value={{theme, toggle}}>
            <ThemeNavBar />
            <h1>React Context API</h1>
            <Layout>
                <p>Section 2</p>
                <p>Description</p>
            </Layout>
        </ThemeContext.Provider>
    )
}

export default App;
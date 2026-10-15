import ParentComponent from "./components/ParentComponent";
import ColorPicker from "./components/ColorPicker";

function App(){
    return(
        <div>
            <h1>React Fundamentals</h1>
            <ParentComponent />
            <ColorPicker />
        </div>
    );
}

export default App
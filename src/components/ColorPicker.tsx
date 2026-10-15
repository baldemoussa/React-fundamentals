import { useState } from "react";
import ColorInput from "./ColorInput";


function ColorPicker() {
    const [color, setColor] = useState("white");

    const handleColorChange = (newColor: string) => {
        setColor(newColor);
    }

  return (
    <div>
      <h2>Color Picker</h2>

      <div style={{backgroundColor: color}}>
        <ColorInput
            onColorChange={handleColorChange}
        />
        <p>Current Color: {color}</p>
      </div>
    </div>
  );
}

export default ColorPicker;
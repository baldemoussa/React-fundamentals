interface ColorInputProps {
  onColorChange: (color: string) => void;
}

function ColorInput({ onColorChange }: ColorInputProps) {
  return (
    <div>
      <input type="text"
      onChange={(e) => onColorChange(e.target.value)} />
    </div>
  );
}

export default ColorInput;
interface ChildButtonProps {
  // Prop to receive the function from the parent
  onNameChange: (newName: string) => void; // Expects a function taking a string
  currentName: string; // Just to show context
}
 
function ChildButton({ onNameChange, currentName }: ChildButtonProps) {
 
  const handleClick = () => {
    // When the button is clicked, call the function passed down via props
    const newName = currentName === "Alice" ? "Bob" : "Alice";
    onNameChange(newName); // Pass the new name back up to the parent
  };
 
  return (
    <button onClick={handleClick}>
      Change Name (Current: {currentName})
    </button>
  );
}
 
export default ChildButton;
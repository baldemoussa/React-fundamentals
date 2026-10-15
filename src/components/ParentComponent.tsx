import { useState } from 'react';
import ChildButton from './ChildButton';
 
function ParentComponent() {
  const [name, setName] = useState("Alice");
 
  // This function will be passed down to the child
  // It knows how to update the parent's state
  const handleNameChangeFromChild = (updatedName: string) => {
    setName(updatedName);
  };
 
  return (
    <div style={{ border: '1px solid blue', padding: '15px' }}>
      <h2>Parent Component</h2>
      <p>Current Name in Parent: {name}</p>
      <hr />
      {/* Pass the handler function down as a prop named 'onNameChange' */}
      <ChildButton onNameChange={handleNameChangeFromChild} currentName={name} />
    </div>
  );
}
export default ParentComponent;
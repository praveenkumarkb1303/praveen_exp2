import React from "react"; 
function App() { 
const handleClick = () => { 
alert("Button Clicked"); 
}; 
return ( 
<div> 
<h1>Button Event Example</h1> 
<button onClick={handleClick}> 
Click Me 
</button> 
</div> 
); 
} 
export default App; 
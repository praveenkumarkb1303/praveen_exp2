import React, { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <h1>Conditional Rendering</h1>

      <p>loggedIn ?</p>

      {loggedIn ? (
        <h2>Welcome User</h2>
      ) : (
        <h2>Please Login</h2>
      )}

      <button onClick={() => setLoggedIn(!loggedIn)}>
        Toggle
      </button>
    </div>
  );
}

export default App; 

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    // Initialize state
    this.state = {
      count: 0,
    };
  }

  // Increment function
  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Class Counter</h1>

        <h2>{this.state.count}</h2>

        <button onClick={this.increment}>
          Increment
        </button>
      </div>
    );
  }
}

export default App;

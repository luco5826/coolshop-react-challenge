import React from "react";
import Calculator from "./components/Calculator";
import Title from "./components/Title";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { version: React.version };
  }

  render() {
    return (
      <div className="page-wrap">
        <Title>React Version: {this.state.version}</Title>
        <Calculator />
      </div>
    );
  }
}

export default App;

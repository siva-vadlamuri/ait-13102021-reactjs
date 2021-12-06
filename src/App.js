import React from "react";
import Button from "./Components/Button";
import Header from "./Components/Header";

const name = "React Js";
class App extends React.Component {
  state = {
    name: "React Js ",
    count: 0,
  };
  handleClick = () => {
    // alert("Clicked");
    this.setState({ name: "shiva" });
  };
  // this.state.name = "shiva"

  render() {
    return (
      <div>
        <Header />
        {/* Header */}
        {/* Main Content */}
        {/* Footer */}
        <p>{this.state.name}</p>
        <button onClick={this.handleClick}>Change text</button>
        <h1>{name}</h1>
        <p>{this.state.count}</p>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.setState({ count: this.state.count - 1 });
          }}
        >
          decrement
        </button>
        <Button name="Play Store" />
        <Button name="App Store" />
      </div>
    );
  }
}

// };

export default App;

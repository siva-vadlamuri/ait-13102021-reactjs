import React from "react";
import Button from "./Components/Button";
import Header from "./Components/Header";
import Product from "./Components/Products/Product";
import Users from "./Components/Users/Users";
import "./App.css";
import Pagination from "./Components/Pagination/Pagination";
import ContactUs from "./Components/ContactUs/ContactUs";
import Routing from "./Components/Routing/Routing";

const name = "React Js";
class App extends React.Component {
  state = {
    name: "React Js ",
    count: 0,
    isUserLogin: true,
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
        <Routing />
        {/* </Footer> */}
        {/* <Pagination /> */}
        {/* <ContactUs /> */}
        {/* <div>
          <p class="error">Error ocurred </p>
        </div>
        <div className="d-flex justify-content-around mt-3">
          <Product
            name="Google Home "
            description="You AI Assitiance "
            price={4000}
          />
          <Product
            name="Samsung s10 "
            description="Smart mobile never before "
            price={45000}
          />
          <Product
            name="Apple Iphone 12 Pro"
            description="Build With M13 Chip"
            price={45000}
          />
        </div> */}

        {/* User Component */}
        {/* <Users isLogin={false}/> */}

        {/* {this.state.isUserLogin ? (
          <div> Welcome User </div>
        ) : (
          <div>Please Login</div>
        )} */}

        {/* Header */}
        {/* Main Content */}
        {/* Footer */}
        {/* <p>{this.state.name}</p>
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
        </button> */}
        {/* <Button name="Play Store" />
        <Button name="App Store" /> */}
        {/* <Users /> */}
      </div>
    );
  }
}

// };

export default App;

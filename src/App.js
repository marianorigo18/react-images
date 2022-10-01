import { Component } from "react";
import Products from "./components/Products";

class App extends Component {
  state = {
    dataImage: [
      { id: 1, name: "logo", img: "/images/logo-electricidad-centro.png" },
      { id: 2, name: "logo-react", img: "/images/logo192.png" },
    ],
  };
  render() {
    return (
      <div>
        <Products products={this.state.dataImage} />
      </div>
    );
  }
}

export default App;

import React from "react";
import { Header } from "./Components";
import { Home, Cart } from "./Pages";
import { Route } from "react-router-dom";
import axios from "axios";
import store from "./redux/store";
import { setPizzas } from "./redux/actions/pizzas";

// function App() {
//   // const [pizzas, setPizzas] = React.useState([]);

//   React.useEffect(() => {
//     axios.get("http://localhost:3000/db.json").then(({ data }) => {
//       setPizzas(data.pizzas);
//     });
//   }, []);

//   return;
// }

class App extends React.Component {
  componentDidMount() {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      // store.dispatch(setPizzas(data.pizzas));
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="content">
          <Header />
          <Route path="/" render={() => <Home items={[]} />} exact />
          <Route path="/cart" component={Cart} exact />
        </div>
      </div>
    );
  }
}

export default App;

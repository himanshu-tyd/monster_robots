import "./App.css";
import React, { Component} from "react";
import CardList from "./components/card-list/card-list";
import { SearchBox } from "./components/search-box/search-box";


class App extends Component {
  constructor() {
    super();

    this.state = {

      monster: null,
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monster: users }));
  }

  render() {
    const { searchField, monster } = this.state;

    if (!monster) {
      return <div>Loading...</div>;
    }

    const filteredMonsters = monster.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    

    return (
      <div className="App">
      <h1>monster robots</h1>
        <SearchBox
          placeholder="search Monster"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monster={filteredMonsters} />
      </div>
    );
  }
}

export default App;

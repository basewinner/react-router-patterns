import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";
import NavBar from "./NavBar";

import whiskey from "./pictures/whiskey.jpg";
import tubby from "./pictures/tubby.jpg";
import duke from "./pictures/duke.jpg";
import perry from "./pictures/perry.jpg";


{/* <div className="container">
<div className="App">
  <BrowserRouter>
    <NavBar />
    <Route exact path="/drink">
      <Drink />
    </Route>
    <Route exact path="/eat">
      <Eat />
    </Route>
    <Route exact path="/">
      <Home />
    </Route>
  </BrowserRouter>
</div>
</div> */}

function App({dogs}) {
  return (
    <div className="container">
      <div>
        <BrowserRouter>
          <NavBar dogs={dogs} />
            <Routes dogs={dogs} />        
        </BrowserRouter>
      </div>
    </div>
  );
}

export const dogs = [
  {
    name: "Whiskey",
    age: 5,
    src: whiskey,
    facts: [
      "Whiskey loves eating popcorn.",
      "Whiskey is a terrible guard dog.",
      "Whiskey wants to cuddle with you!"
    ]
  },
  {
    name: "Duke",
    age: 3,
    src: duke,
    facts: [
      "Duke believes that ball is life.",
      "Duke likes snow.",
      "Duke enjoys pawing other dogs."
    ]
  },
  {
    name: "Perry",
    age: 4,
    src: perry,
    facts: [
      "Perry loves all humans.",
      "Perry demolishes all snacks.",
      "Perry hates the rain."
    ]
  },
  {
    name: "Tubby",
    age: 4,
    src: tubby,
    facts: [
      "Tubby is really stupid.",
      "Tubby does not like walks.",
      "Angelina used to hate Tubby, but claims not to anymore."
    ]
  }
];

App.defaultProps = { dogs };

export default App;
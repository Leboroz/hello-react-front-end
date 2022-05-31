import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Greeting from "./components/Greeting"

class App extends React.Component {
  render () {
    return (  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Greeting greeting="Hello"/>} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;

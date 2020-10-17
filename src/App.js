import React from "react";

const API_RANDOM_JOKE = 'http://api.icndb.com/jokes/random';

const App = () => {
  return (
    <div className="box"> 
      <h3>Another Chuck Norris Joke Generator</h3>
      <p>Joke Here!!!</p>
      <button>Generate New Joke!</button>
    </div>
    );
};
export default App;

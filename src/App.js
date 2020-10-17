import React from "react";

const API_RANDOM_JOKE = 'http://api.icndb.com/jokes/random';

const App = () => {
  const [joke, setJoke] = React.useState('');

  const generateJoke = () => {
    fetch(API_RANDOM_JOKE)
    .then(res => res.json())
    .then(data => setJoke(data.value.joke))
  }

  React.useEffect(() => {
    generateJoke();
  }, [])

  return (
    <div className="box"> 
      <h3>Not Enough Chuck Norris Jokes!</h3>
      <p dangerouslySetInnerHTML={{__html: joke}}/>
      <button onClick={generateJoke}>Generate New Joke</button>
    </div>
    );
};
export default App;

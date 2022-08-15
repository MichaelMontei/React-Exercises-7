import logo from './logo.svg';
import './App.css';
import Button from "./Button";
import React, {useState} from "react";
import Animals from "./Animals";

function App() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = event => {
        console.log('handleSubmit ran');
        event.preventDefault();
        alert(`Hello ${firstName} ${lastName}`)
    }
    const [count, setCount] = useState(0);

    function increment(){
        setCount(count + 1);
    }

    function handleClick() {
        alert("Clicked");
    }

    const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
    const listAnimals = animals.map((animal) => <li>{animal}</li>);

  return (
    <div className="App">
      <header className="App-header">
          <div className="container">
              <h1>React Learning Exercises</h1>
              <hr/>
              <h2>Exercise 2: Capturing User Clicks</h2>
              <a href="https://coderfiles.dev/blog/reactjs-coding-exercises/" target="_blank" rel="noopener noreferrer">Website of the Exercises</a>
              <p>Using the native HTML button tag, capture the click event and alert the message, "Clicked!".</p>
               <button onClick={handleClick}>Click Me</button>
          </div>
          <br/>
          <hr/>
          <div>
              <h2>Exercise 3: Custom Component</h2>
                <p>In this exercise, build your own Button component and render it three times. On user click, it should alert which button was clicked:</p>
                <Button />
          </div>
          <br/>
          <hr/>
          <div>
              <h2>Exercise 4: State and Props</h2>
                <p>This exercise is simple, and is a very common React tutorial out there. Use the useState React hook to track how many times a button is clicked, and display the number.

                    The number must increment each time the button is clicked:</p>
                <p>Clicks: {count}</p>
                <button onClick={increment}>Counter</button>
          </div>
          <br/>
          <hr/>
          <div>
              <h2>Exercise 5: Mapping Through A List And Rendering</h2>
                <p>In this exercise, instead of manually and "imperatively" coding the render of each item in a list, use the map function to "declare" how React should render the list.

                    Given an array:

                    ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
                    Use the map function to render them in an unordered list:</p>
              <ul>{listAnimals}</ul>
          </div>
          <br/>
          <hr/>
          <div>
              <h2>Exercise 6: Mapping Through A List And Rendering (With A Custom Component)</h2>
              <p>In exercise 3, we mentioned that part of what makes React so great is that it allows us to create our custom, re-usable components.

                  You only created a custom button there. This time, you'll create a custom component that displays each item from exercise 5:</p>
              <Animals/>
          </div>
          <br/>
          <hr/>
          <div>
              <h2>Exercise 7: Building A Form</h2>
              <p>Build a form that accepts a first name and a last name. And instead of a boring "Submit" button, make a button that says "Greet Me" that when clicked, will alert "Hello [first name] [last name]!".</p>
              <form onSubmit={handleSubmit}>
                  <label>Firstname:  <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                  /></label>
                  <label>Lastname: <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}

                  /></label>
                  <br/>
                  <br/>
                  <button type="submit">GREET ME</button>
              </form>
          </div>


      </header>
    </div>
  );
}

export default App;

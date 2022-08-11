import React, {useState} from "react";

function Test() {
    let [one, setOne] = useState({
        button1: "button 1 was clicked",
        button2: "button 2 is clicked",
        button3: "clicked button 3",
    });

    const updateButtonOne = () => {
        setOne(previousState => {
            return { ...previousState, button1: "blue" }
        });
    }

    function buttonOne() {
        alert("Button 1 was clicked");
    }
    function buttonTwo() {
        alert("Button 2 was clicked");
    }
    function buttonThree() {
        alert("Button 3 was clicked");
    }



    return (
        <div>
            {/*<h1>Test {one.button1}</h1>*/}
            {/*<h1>Test {one.button2}</h1>*/}
            {/*<h1>Test {one.button3}</h1>*/}
            <button onClick={buttonOne}>Button 1</button>
            <button onClick={buttonTwo}>Button 2</button>
            <button onClick={buttonThree}>Button 3</button>
        </div>
    )
}
export default Test
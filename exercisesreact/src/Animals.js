import React from "react";

function listingAnimals() {
    const animalsArray = ['cat', 'dog', 'horse', 'cow', 'sheep', 'chicken'];
    const listAnimalsTwo = animalsArray.map((animal) => <li>{animal}</li>);


    return (
        <div>
            <ul>{listAnimalsTwo}</ul>
        </div>
    )

}
export default listingAnimals;
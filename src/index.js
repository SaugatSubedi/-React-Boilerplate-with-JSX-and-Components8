import React from 'react';
import ReactDOM from 'react-dom';
const word = 'third Assignment';
const element = <h1>This is my  {word}.</h1>

ReactDOM.render(element, document.getElementById('heading'));
function Button(properties){
    return <button type="submit">{properties.label} </button>
}
ReactDOM.render(<Button label="SAVE"/>, document.getElementById('save'));
ReactDOM.render(<Button label="CANCEL"/>, document.getElementById('cancel'));
ReactDOM.render(<Button label="RESET"/>, document.getElementById('reset'));
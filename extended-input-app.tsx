/* App.tsx
  
   React App
   
   Created by Andi Gibson on 6/30/2020 
*/

import React from 'react';
import logo from './logo.svg';
import './App.css';

/* NOTES: App is the component (composed of a logo, label and text box)

1st props
2nd state

Define the state of this component
Added property labelText */

interface MyState {
    name: string; //NOTES: keeps the current text displayed
    labelText: string; //NOTES: changes everytime you click the submit button
}

class App extends React.Component<any, MyState> {

    onChangeText = (event: React.FormEvent<HTMLInputElement>): void => {
        // NOTES: change the state
        // NOTES: a subset of the fields in myState
        this.setState({ name: event.currentTarget.value });
    };

    handleClick = (): void => {
        this.setState({ labelText: this.state.name });
    };

    constructor(state: MyState) {
        super(state); // NOTES: this calls the base class constructor, the constructor of component
        this.state = { name: "", labelText: "Welcome" };
    }

    /*Revise input tag and its attriutues
    this.state - comes from component
    this.props - comes from component */

    render() {
        return (
            <div className="App">
                <header className="App-header">

                    <img src={logo} className="App-logo" alt="logo" />
                    {this.state.labelText}
                    <p>
                        <input type="text" value={this.state.name} onChange={this.onChangeText} />
                        <button type="submit" onClick={this.handleClick}> Submit</button>
                    </p>
                </header>
            </div>
        );
    }
}

export default App;

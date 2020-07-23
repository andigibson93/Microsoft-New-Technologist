/* App.tsx

  Shopping List App

  Created by Andi Gibson on 7/1/2020 
*/

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

//NOTES: This current to do list represents the state of the component with the shape of the state a collection of strings
interface AppState {
  items: Array<ShoppingItem>
}

//NOTES: Class - defining how an object looks like and work. It stores data to keep track of the name and price of each shopping item
class ShoppingItem{
  public name = "";
  public price = 0.0;
}

/* Sample Items and Prices */
const milk: ShoppingItem = {
name: "Almond Milk",
price: 2.5
}

const ham: ShoppingItem = {
name: "Prosciutto",
price: 4.5
}

const pancake: ShoppingItem = {
name: "Pancake Mix",
price: 4.5
}

//NOTES: Created a class App that inherits from the imported class React.Component
class App extends React.Component<{},AppState>{

//NOTES: Constructor Method - permits to create the object and runs everytime its created
constructor(props: any, state: any){
  super(props, state); //super class
  this.state = {
    items : [milk, ham, pancake]
  };
}

/* Rendering - Javascript code generates html
When render is invoked in React, it returns a bunch of html to display
react detects a value using for your page has changes and call render */

public render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>Whole Foods</h1>
      </header>
      <h1>My Shopping List </h1>  

      {/* Form for the item and price to Submit*/}
     <form onSubmit={this.onSubmit}>
      <input type="text" placeholder="Enter Item" onChange={this.changeInputName} />
      <input type="text" placeholder="Enter Price" onChange={this.changeInputPrice} />
      <input type="submit" />
    </form>
     
     
    {/* Printing the items after Submit*/}
    {this.state.items.map(items => (
      <div key={items.name}>
      <label>
        <input type="checkbox"/> 
        {items.name} ${items.price} -{items.description}
        </label>
      </div>
      // <li key={items.name}> {items.name} ${items.price} -{items.description}</li>
    ))}

    <button type="checkbox"></button>
  </div>
  );
 }
 
 private inputName = "";

 private changeInputName = (event: React.ChangeEvent<HTMLInputElement>) => {
  this.inputName = event.target.value;
};

//NOTES: Variable to store string for input price
 private inputPrice = "";

 private changeInputPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
  this.inputPrice = event.target.value;
};

// NOTES: Constraining the type of the event 
private onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  // This generates an alert with the value of the textbox
  alert("name: " + this.inputName + "\nPrice: " + this.inputPrice);

  //NOTES: The object added to the shopping list
  const addItems: ShoppingItem = { name: this.inputName, price: parseFloat(this.inputPrice) } 
  this.setState({
    items: this.state.items.concat(addItems)
    });
  };
}

export default App;
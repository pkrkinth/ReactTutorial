import React, { useState } from 'react';
import './App.css'
import ToDoList from './ToDoList'

const App = () => {
    const [inputList, setInputlist] = useState("");
    const [Items, setItems] = useState([]);

    const itemEvent =(event) => {
      console.log(event.target.value);
      setInputlist(event.target.value);
    }

    const listOfItems = () => {
      setItems((oldItems) => {
        return[...oldItems, inputList];
      });
      setInputlist("");
    }

    const deleteItems = (id) => {
      console.log("deleted");

      setItems((oldItems) => {
        return oldItems.filter((arrayElements, index) => {
          return index !== id;
        })
      })
    }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
        <br/>
          <h1>ToDo List</h1>
            <br/>
              <input type="text" placeHolder="Add Items Here" 
                onChange={itemEvent}
                value={inputList}
              />
              <button type="submit" onClick={listOfItems}> + </button>
              <ol>
              {Items.map((itemValue, index) => {
                return (
                  <ToDoList
                  key={index}
                  id={index} 
                  text={itemValue}
                  onSelect={deleteItems}
                  />);
              })}
              </ol>
              {/* <button type="reset" Remove/> */}
              {/* <button type="reset" onClick={onReset}> X </button> */}
            
          </div>
      </div>
    </>
  )
}

export default App;

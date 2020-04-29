import React, { Component } from "react";
import Data from "../data";

import "./Table.css";

class Table extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div class="container">
        <table class="table-container">
          <tr>
            <th>Name</th>
            <th>Lastname</th>
            <th>Age</th>
            <th>Sport</th>
          </tr>
            { Data.map( (character) => {
            return (
              <tr>
                  <td>{character.name}</td> 
                  <td>{character.lastName}</td> 
                  <td>{character.age}</td> 
                  <td>{character.sport}</td>
              </tr>
              )
              })}
        </table>
        <div class="button-container">
          <button>Sort by name</button>
          <button>Sort by age</button>
          <button>Sort by sport</button>
        </div>
      </div>
    );
  }
}

export default Table;

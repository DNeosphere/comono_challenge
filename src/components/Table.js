import React, { Component } from "react";


import "./Table.css";

//compare function helper

/* const rawDAta = Data
const sortedDAta = Data.sort(getSortOrder('name'))
console.log(sortedDAta)
console.log('unsorted', Data)
console.log(rawDAta)  */


class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {unsortedData : this.props.data}
    this.handleSortName = this.handleSortName.bind(this);
    this.handleSortAge = this.handleSortAge.bind(this);
    this.handleSortSport = this.handleSortSport.bind(this);
    this.getSortOrder = this.handleSortSport.bind(this);
  }

  getSortOrder(prop) {
    return function(a, b) {
        if (a[prop] > b[prop]) {
            return 1;
        } else if (a[prop] < b[prop]) {
            return -1;
        }
        return 0;
    }
  }
  handleSortName () {
    alert('hola')
    const sortedDAta = this.props.data(this.getSortOrder('name'))
  }
  handleSortAge () {
    const sortedDAta = this.props.data.sort(this.getSortOrder('age'))
    this.setState( {unsortedData: sortedDAta} )
    console.log(sortedDAta)
  }
  handleSortSport() {
    console.log('hola')
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
            { this.state.unsortedData.map( (character) => {
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
          <button onClick={this.handleSortName} className="myButton">Sort by name</button>
          <button onClick={this.handleSortAge} className="myButton">Sort by age</button>
          <button onClick={this.handleSortSport} className="myButton">Sort by sport</button>
        </div>
      </div>
    );
  }
}

export default Table;

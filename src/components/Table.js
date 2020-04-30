import React, { useState } from 'react'

import './Table.css'

function Table(props) {
    const [sortedData, setSortedData] = useState(props.data)

    const getSortOrder = (prop) => {
      return function(a, b) {
          if (a[prop] > b[prop]) {
              return 1;
          } else if (a[prop] < b[prop]) {
              return -1;
          }
          return 0;
      }
    }

    const handleSortName = () => {
      let sortedDataName = sortedData.sort(getSortOrder('name'))
      setSortedData([...sortedDataName])
    }

    const handleSortAge = () => {
      let sortedDataAge = sortedData.sort(getSortOrder('age'))
      setSortedData([...sortedDataAge])
    }

    const handleSortSport = () => {
      let sortedDataSport = sortedData.sort(getSortOrder('sport'))
      setSortedData([...sortedDataSport])
    }

    return (
      <div class="container">
        <table class="table-container">
          <tr>
            <th>Name</th>
            <th>Lastname</th>
            <th>Age</th>
            <th>Sport</th>
          </tr>
            { sortedData.map( (character) => {
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
          <button onClick={handleSortName} className="myButton">Sort by name</button>
          <button onClick={handleSortAge} className="myButton">Sort by age</button>
          <button onClick={handleSortSport} className="myButton">Sort by sport</button>
        </div>
      </div>
    )
}

export default Table;
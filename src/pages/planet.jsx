import React from 'react'
import {useEffect, useState} from 'react'

const Planet = () => {
  const [records, setRecords] = useState([])
  useEffect(() => {
    fetch(' https://swapi.dev/api/planets/1')
    .then(Response => response.json())
    .then(data => setRecords(data))
    .catch(err => console.log(err)
  })
  return (
    <div>
      <div>Search for planets </div>
      <div>
        <input id="search" type="text" placeholder="a"  onChange={(e) =>setRecords(e.target.value)}/>
      </div>
      {/*
        * Replace the section below with the results of the search
        */}
      <section>
        <header>
          <div className="col">Name</div>
          <div className="col">Population</div>
        </header>
        <div>
          <div className="col">Tatooine</div>
          <div title='200000' className="col">{'\u{1F468}\u{1F468}\u{1F468}\u{1F468}\u{1F468}'}</div>
        </div>
      </section>
      <br/>
      <div className="error">No planet matching search term</div>
    </div>
  )
}

export default Planet;
import React, { useState } from 'react'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' } 
  ])
  const [ personsToShow, setPersonsToShoow ] = useState( persons )
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const onSearch = (event) => {
    let q = event.target.value
    let results = persons.filter( (person) => person.name.indexOf(q) >= 0 )
    setPersonsToShoow( results )
    
  }
  const onNewName = (event) => {
    setNewName(event.target.value)
  }

  const onNewPhone = (event) => {
    setNewPhone(event.target.value)
  }
  const submitForm = (event) => {
    event.preventDefault()
    if( persons.filter((person)=> person.name === newName ).length > 0 )
    {
      alert( `${newName} already exists` )
      return;
    }
    setPersons( persons.concat( { name: newName, phone: newPhone } ) )
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          Filter with: <input onChange={onSearch}/>
        </div>
      </form>
      <h2>Add new</h2>
      <form>
        <div>
          name: <input onChange={onNewName}/>
        </div>
        <div>
          phone: <input onChange={onNewPhone}/>
        </div>
        <div>
          <button type="submit" onClick={submitForm}>add</button>
        </div>
      </form>
      <div>debug: {newName}</div>
      <h2>Numbers</h2>
      <div>
        <Persons persons={personsToShow}></Persons>
      </div>
    </div>
  )
}

export default App
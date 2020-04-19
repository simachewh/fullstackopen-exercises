import React, { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import PersonFilter from './components/PersonFilter'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' } 
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
    console.log( 'neew namee here ', event.target.value)
    setNewName(event.target.value)
  }

  const onNewPhone = (event) => {
    setNewPhone(event.target.value)
  }
  const submitForm = (event) => {
    event.preventDefault()
    console.log( 'submitting ...' )
    if( persons.filter((person)=> person.name === newName ).length > 0 )
    {
      alert( `${newName} already exists` )
      return;
    }
    setPersonsToShoow( persons.concat( { name: newName, phone: newPhone } ) )
    setPersons( persons.concat( { name: newName, phone: newPhone } ) )
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <PersonFilter onSearch={onSearch}></PersonFilter>
      <h2>Add new</h2>
      <PersonForm onNewName={onNewName} onNewPhone={onNewPhone} submitAddPersonForm={submitForm} />
      
      <div>debug: {newName}</div>
      <h2>Numbers</h2>
      <div>
        <Persons persons={personsToShow}></Persons>
      </div>
    </div>
  )
}

export default App
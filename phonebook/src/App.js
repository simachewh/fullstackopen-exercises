import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-1234567' } ]) 
    const [ newName, setNewName ] = useState('')
    const [ newPhone, setNewPhone ] = useState('')
    
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
        <ul>
          {persons.map( (person) =>
            <li key={person.name}>{person.name} {person.phone}</li>
           )}
        </ul>
      </div>
    </div>
  )
}

export default App
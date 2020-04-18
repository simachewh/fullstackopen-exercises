import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' } ]) 
  const [ newName, setNewName ] = useState('')

  const onNewName = (event) => {
    console.log('new name ', event.target.value);
    setNewName(event.target.value)
  }

  const submitForm = (event) => {
    event.preventDefault()
    setPersons( persons.concat( { name: newName } ) )
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={onNewName}/>
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
            <li key={person.name}>{person.name}</li>
           )}
        </ul>
      </div>
    </div>
  )
}

export default App
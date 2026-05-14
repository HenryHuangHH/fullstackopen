import { useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import { useEffect } from 'react'
import axios from 'axios';

import personService from './services/person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: 778}
  ]) 
  const [newName, setNewName] = useState('')

  const handleFormSubmit = (e) =>{
    e.preventDefault();

    const nameExist = persons.some(
      p => p.name === newName
    )
    // .some return true or false

    if(nameExist){
      alert(`${newName} is already in the phonebook`)
      return 
    }

    const pObj = {
      name: newName,
      number: newNum
    }

    personService
      .create(pObj)  // pass in the newly created obj
      .then(data=>{
          setPersons(persons.concat(data))
          setNewName(''); // set it to no name again
          setNewNum('');

      })


    
  }

  const handleNameChange = (e) =>{
    console.log(e.target.value);
    setNewName(e.target.value);
  }

  const [newNum,setNewNum] = useState('')
  const handleNumChange = (e) =>{
    setNewNum(e.target.value)
  }

  const [search, setSearch] = useState('')
  const handleSearch = (e) =>{
    setSearch(e.target.value)
  }

  useEffect(() =>{
    personService
    .getAll() // get request .THEN takes in whver data return by getall which is r
    .then(data=>{
        setPersons(data)
    })

  },[])


  return (
    <div>
      <h2>Phonebook</h2>

      <Filter search={search} handleSearch={handleSearch} />

      <h3>Add a new</h3>

      <PersonForm
        handleFormSubmit={handleFormSubmit}
        newName={newName}
        handleNameChange={handleNameChange}
        newNum={newNum}
        handleNumChange={handleNumChange}
      />

      <h3>Numbers</h3>

      <Persons persons={persons} search={search} />
    </div>
  )
}

export default App

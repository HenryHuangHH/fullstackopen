import { useState } from 'react'

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

    setPersons(persons.concat(pObj));
    setNewName(''); // set it to no name again
    setNewNum('');
  }

  const handleNameChange = (e) =>{
    console.log(e.target.value);
    setNewName(e.target.value);
  }

  const [newNum,setNewNum] = useState()
  const handleNumChange = (e) =>{
    setNewNum(e.target.value)
  }

  const [search, setSearch] = useState('')
  const handleSearch = (e) =>{
    setSearch(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleFormSubmit}>
        {/* submit call  */}
        <div>
          filter shown with 
          <input
          value = {search}
          onChange = {handleSearch}
          
          />

        </div>

        <h2>Add a new</h2>
        <div>
          name: <input 
          value = {newName}
          onChange = {handleNameChange}/>
          {/* make it controlled by reactd with the value = to state */}
        </div>
        <div>
          number: <input
          value = {newNum}
          onChange = {handleNumChange}
          
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons
      .filter(p => p.name.includes(search))
      .map(p => (
        <li key={p.name}>
          {p.name} {p.number}
        </li>
      ))
    }
    </div>
  )
}

export default App
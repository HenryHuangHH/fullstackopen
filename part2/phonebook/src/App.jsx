import { useState, useEffect } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import Notification from './components/Notification'
import personService from './services/person'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)

  const showNotification = (msg) => {
    setNotificationMessage(msg)
    setTimeout(() => {
      setNotificationMessage(null)
    }, 5000)
  }

  const handleFormSubmit = (e) =>{
    e.preventDefault();

    // const nameExist = persons.some(
    //   p => p.name === newName
    // ) 
    // .some return true or false

    const existPerson = persons.find(
      p => p.name === newName
    ) // entire person obj saved

    if(existPerson){
      // alert(`${newName} is already in the phonebook`)

      if(window.confirm(`${newName} is already in the phonebook, repace old num with new one`)){
        const newNumberPersonObj = {
        ...existPerson,
        number: newNum
      }

        personService.updateNumber(existPerson.id,newNumberPersonObj)
        .then(returnObj =>{
            setPersons((prev) => prev.map((p) => (p.id !== existPerson.id ? p : returnObj)))
              setNewName('')
              setNewNum('')
              showNotification(`Number for ${newName} was updated`)
          }
        ) // make it in sync with the backedn

      }
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
          showNotification(`Added ${data.name}`)
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

  const handleDelete = (id,name) =>{
    if(window.confirm(`delete ${name}`)){
        personService.remove(id).then( ()=>{
          setPersons(persons.filter(p => p.id !== id))
        })
    }

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
      <Notification message={notificationMessage} />

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

      <Persons persons={persons} search={search} handleDelete={handleDelete}/>
    </div>
  )
}

export default App

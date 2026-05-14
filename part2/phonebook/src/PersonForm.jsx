const PersonForm = ({
  handleFormSubmit,
  newName,
  handleNameChange,
  newNum,
  handleNumChange,
}) => {
  return (
    <form onSubmit={handleFormSubmit}>
      {/* submit call  */}
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
  )
}

export default PersonForm

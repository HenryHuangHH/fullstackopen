const Persons = ({ persons, search, handleDelete }) => {

  return (
    <>
      {persons
      .filter((p) => p.name && p.name.includes(search ?? ''))
      .map(p => (
        <li key={p.id}>
          {p.name} {p.number}
           <button onClick={() => handleDelete(p.id,p.name)}>
           delete </button>
        </li>
      ))
    }
    </>
  )
}

export default Persons

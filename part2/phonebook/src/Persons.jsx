const Persons = ({ persons, search }) => {
  return (
    <>
      {persons
      .filter(p => p.name.includes(search))
      .map(p => (
        <li key={p.name}>
          {p.name} {p.number}
        </li>
      ))
    }
    </>
  )
}

export default Persons

import { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'John',
    age: 24,
    hobby: 'read books',
  })


  const btnEvent = () => {
    setPerson({
      name: 'Peter',
      age: 28,
      hobby: 'Screems At Computer',
    })
  }

  return (

    <div>
      <h2>{person.name}</h2>
      <h3>{person.age}</h3>
      <h4>Enjoys to:{person.hobby}</h4>
      <button className="btn" onClick={()=>btnEvent()}>
        Show Peter
      </button>
    </div>
  )
}

export default UseStateObject

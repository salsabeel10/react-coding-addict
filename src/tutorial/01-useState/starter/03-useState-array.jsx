import { useState } from 'react'
import { data } from '../../../data.js'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)
  const removeOne = (id) => {
    const newPeople = people.filter((item) => item.id !== id);
    setPeople(newPeople)
  }
  const removeAll = () => {
    setPeople([])
  }
  return (
    <div>
      {people.map((item) => {
        const { id, name } = item
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button onClick={() => removeOne(id)}>remove</button>
          </div>
        )
      })}
      <button className="btn" onClick={removeAll}>
        Clear All
      </button>
    </div>
  )
}

export default UseStateArray

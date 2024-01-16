import { useState } from 'react'
import { data } from '../../../data.js'

const UserChallenge = () => {
  const [name, setName] = useState('')
  const [users, setUsers] = useState(data)

  const handleEvent = (e) => {
    e.preventDefault()
    if (!name) return
    console.log(e.target.name.value)
    const fakeId = Date.now()
    const newUser = { id: fakeId, name }
    const updatedUser = [...users, newUser]
    setUsers(updatedUser)
    setName('')
  }
  const removeUser = (id) => {
    const updatedUser = users.filter((person) => person.id !== id)
    setUsers(updatedUser)
  }

  return (
    <div>
      <form className="form" onSubmit={handleEvent}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label" value={name}>
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>

      {/* render users below */}
      {users.map((item, index) => {
        return (
          <div>
            <h1 key={index}>{item.name}</h1>
            <button className="btn" onClick={() => removeUser(item.id)}>
              remove
            </button>
          </div>
        )
      })}
    </div>
  )
}
export default UserChallenge

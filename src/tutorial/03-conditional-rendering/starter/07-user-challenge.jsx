import { useState } from 'react'

const UserChallenge = () => {
  const [user, setuser] = useState('')

  const eventBtn = () => {
    if (!user) {
      setuser('salsabeel')
    } else {
      setuser('')
    }
  }
  return (
    <div>
      <h3>{!user ? 'Please Login' : 'Hello ' + user}</h3>
      <button className="btn" onClick={eventBtn}>
        {!user ? 'Login' : 'Logout'}
      </button>
    </div>
  )
}

export default UserChallenge

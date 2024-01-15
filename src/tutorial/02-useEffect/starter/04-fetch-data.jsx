import { useEffect, useState } from 'react'

const url = 'https://api.github.com/users'

const FetchData = () => {
  const [users, setUsers] = useState()
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setUsers(data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      <ul className="users">
        {users.map((item) => {
          const { id, avatar_url, login, html_url } = item;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h3>{login}</h3>
                <a href={html_url}>profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default FetchData

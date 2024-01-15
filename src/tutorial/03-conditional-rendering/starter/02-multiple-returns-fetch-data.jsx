import { useEffect, useState } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState()
  const [isLoading, setisLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url)
        
        if(!resp.ok){
          setIsError(true)
          setisLoading(false)
          return;
        }
        const user = await resp.json()

        setUser(user)
      } catch (err) {
        setIsError(true)
        console.log(err)
      }
      setisLoading(false)
    }
    fetchData()
    
  }, [])
  if (isLoading) {
    return <h2>Loading....</h2>
  }
  if (isError) {
    return <h2>There Was an Error...</h2>
  }
  const {avatar_url, name, company, bio} = user;//object destructing
  return (
    <div>
      <img
        style={{ width: '150px', borderRadius: '25px' }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>Works at {company}</h4>
      <p>{bio}</p>
    </div>
  )
}
export default MultipleReturnsFetchData

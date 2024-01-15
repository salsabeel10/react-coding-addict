import { useEffect, useState } from 'react'

const MultipleReturnsBasics = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  if (loading) {
    return <h2>Loading....</h2>
  }
  return <h2>My App</h2>
}
export default MultipleReturnsBasics

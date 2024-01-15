import React from 'react'
import { people } from '../../../data'
import Person from './Person'

const List = () => {
  console.log(people)
  return (
    <div>
      hai
      {people.map((item) => {
        const { id, name, nickName, image } = item
        return <Person key={id} {...item} />
      })}
    </div>
  )
}

export default List

import React from 'react'
import avatar from '../../../assets/default-avatar.svg'

const Person = ({ name, nickName = 'shakeAndBake', images }) => {
  const imag = images?.[0]?.small?.url ||avatar
  return (
    <div>
      <img src={imag} alt={name} width={50} />
      <h1>{name}</h1>
      <h2>Nick name:{nickName}</h2>
    </div>
  )
}

export default Person

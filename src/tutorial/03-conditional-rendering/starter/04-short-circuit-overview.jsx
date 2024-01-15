import { useState } from 'react';

const ShortCircuitOverview = () => {
  const [text, settext] = useState()
  const [name, setname] = useState('jack')
  return (
    <div>
      <ul>
        <li>falsy or: {text || 'halo'} </li>
        <li>falsy and: {text && 'halo'} </li>
        <li>turethy or: {name || 'halo'} </li>
        <li>truethy and: {name && 'halo'} </li>
      </ul>
    </div>
  )
};
export default ShortCircuitOverview;

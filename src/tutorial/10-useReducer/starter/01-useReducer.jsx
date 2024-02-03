import React, { useReducer } from 'react'
import { data, people } from '../../../data'
import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from './action'
import reducer from './reducer'

const defaultState = {
  people: data,
  isLoading: false,
}

const UseStateArray = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  const clearList = () => {
    dispatch({ type: CLEAR_LIST })
  }
  const resetList = () => {
    dispatch({ type: RESET_LIST })
  }
  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } })
  }

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}

      {state.people.length > 0 ? (
        <button
          className="btn"
          style={{ marginTop: '2rem' }}
          onClick={clearList}
        >
          clear items
        </button>
      ) : (
        <div>
          <button
            className="btn"
            style={{ marginTop: '1rem' }}
            onClick={resetList}
          >
            reset
          </button>
        </div>
      )}
    </div>
  )
}

export default UseStateArray



- Challenge

- in App.jsx import 02-fetch-data
- take a look at the component
- and try to setup custom fetch hook
- hint :
  hook should return isLoading,isError,user
  and take url as parameter

useFetchPerson.js

```js
import { useState, useEffect } from 'react';

const useFetchPerson = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);
        // console.log(resp);
        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        const user = await resp.json();
        setUser(user);
      } catch (error) {
        setIsError(true);
        // console.log(error);
      }
      // hide loading
      setIsLoading(false);
    };
    fetchUser();
  }, []);

  return { isLoading, isError, user };
};

export default useFetchPerson;
```

Generic Fetch

useFetch.js

```js
import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  // change state value
  const [data, setData] = useState(null);

  useEffect(() => {
    // change name
    const fetchData = async () => {
      try {
        const resp = await fetch(url);

        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        // change to response
        const response = await resp.json();
        setData(response);
      } catch (error) {
        setIsError(true);
        // console.log(error);
      }
      // hide loading
      setIsLoading(false);
    };
    // invoke fetch data
    fetchData();
  }, []);

  return { isLoading, isError, data };
};

export default useFetch;
```

#### Context API

```js
import Starter from './tutorial/09-context-api/starter';
```

Challenge

- create three components and nest them in such way :

- Navbar.jsx

  - NavLinks.jsx (nested in Navbar)
    - UserContainer.jsx (nested in NavLinks)

- import Navbar.jsx in App.jsx (remove container - CSS)
- in Navbar.jsx setup
  - user state value
    - default value {name:'something'}
  - logout function
    - set user back to null
- pass both of them down to UserContainer.jsx
- display user and button
- on button click set user back to null

- extra challenge
- if user null, in UserContainer display <p>please login</p>

Navbar.jsx

```js
import { useState } from 'react';
import NavLinks from './NavLinks';

const Navbar = () => {
  const [user, setUser] = useState({ name: 'bob' });
  const logout = () => {
    setUser(null);
  };
  return (
    <nav className='navbar'>
      <h5>CONTEXT API</h5>
      <NavLinks user={user} logout={logout} />
    </nav>
  );
};
export default Navbar;
```

NavLinks.jsx

```js
import UserContainer from './UserContainer';

const NavLinks = ({ user, logout }) => {
  return (
    <div className='nav-container'>
      <ul className='nav-links'>
        <li>
          <a href='#'>home</a>
        </li>
        <li>
          <a href='#'>about</a>
        </li>
      </ul>
      <UserContainer user={user} logout={logout} />
    </div>
  );
};
export default NavLinks;
```

UserContainer.jsx

```js
const UserContainer = ({ user, logout }) => {
  return (
    <div className='user-container'>
      {user ? (
        <>
          <p>Hello There, {user.name.toUpperCase()}</p>
          <button type='button' className='btn' onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
};
export default UserContainer;
```

#### Setup Global Context

final code in the repo under w-assets

- create new VITE project

```sh
npm create vite@latest global-context -- --template react
```

- install and start the project

```sh
npm install && npm run dev
```

- in src create context.jsx
- setup a global context - GlobalContext
- setup a component (AppContext) with one state value
- return GlobalContext.Provider from AppContext
- wrap then entire application (main.jsx) - children prop "gotcha"
- setup a custom hook
- access in App.jsx
- log result

#### useReducer

```js
import Starter from './tutorial/10-useReducer/starter/01-useReducer.jsx';
```

- it's the complete file from 03-useState-array

Challenge

- let's add reset functionality
- create function that set's people back to data array
- create another button, similar to clear just for reset
- use conditional rendering to toggle between the buttons,
  depending on people value

```js
const resetList = () => {
  setPeople(data);
};

// JSX
{
  people.length < 1 ? (
    <button className='btn' style={{ marginTop: '2rem' }} onClick={resetList}>
      reset
    </button>
  ) : (
    <button className='btn' style={{ marginTop: '2rem' }} onClick={clearList}>
      clear
    </button>
  );
}
```

```js
import React from 'react';
import { data } from '../../../data';
const ReducerBasics = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  const resetList = () => {
    setPeople(data);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {people.length < 1 ? (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={resetList}
        >
          reset
        </button>
      ) : (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={clearList}
        >
          clear
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
```

#### Remove useState

```js
import { useState, useReducer } from 'react';
import { data } from '../../../data';

// default/initial state
const defaultState = {
  people: data,
};
// reducer function
// whatever state is returned from the function is the new state

const reducer = (state, action) => {
  return state;
};

// dispatch({type:'SOME_ACTION'}) an action
// handle it in reducer, return new state

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };

  const clearList = () => {
    // setPeople([]);
  };
  const resetList = () => {
    // setPeople(data);
  };

  return (
    <div>
      {/* switch to state */}
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {/* switch to state */}
      {state.people.length < 1 ? (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={resetList}
        >
          reset
        </button>
      ) : (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={clearList}
        >
          clear
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
```

#### First Dispatch

```js
import { useState, useReducer } from 'react';
import { data } from '../../../data';

const defaultState = {
  people: data,
  isLoading: false,
};

const reducer = (state, action) => {
  if (action.type === 'CLEAR_LIST') {
    return { ...state, people: [] };
  }
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };

  const clearList = () => {
    dispatch({ type: 'CLEAR_LIST' });
    // setPeople([]);
  };
  const resetList = () => {
    // setPeople(data);
  };
  console.log(state);
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length < 1 ? (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={resetList}
        >
          reset
        </button>
      ) : (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={clearList}
        >
          clear
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
```

#### Actions and Default State

```js
import { useReducer } from 'react';
import { data } from '../../../data';

const CLEAR_LIST = 'CLEAR_LIST';
const RESET_LIST = 'RESET_LIST';
const REMOVE_ITEM = 'REMOVE_ITEM';

const defaultState = {
  people: data,
};

const reducer = (state, action) => {
  console.log(action);
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {};

  const clearList = () => {
    dispatch({ type: CLEAR_LIST });
  };

  const resetList = () => {};
  return (
    <div>
      {/* switch to state */}
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {/* switch to state */}

      {state.people.length < 1 ? (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={resetList}
        >
          reset
        </button>
      ) : (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={clearList}
        >
          clear
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
```

#### Reset List Challenge

- setup a dispatch and handle action in the reducer

```js
import { useReducer } from 'react';
import { data } from '../../../data';

const CLEAR_LIST = 'CLEAR_LIST';
const RESET_LIST = 'RESET_LIST';
const REMOVE_ITEM = 'REMOVE_ITEM';

const defaultState = {
  people: data,
};

const reducer = (state, action) => {
  console.log(action);
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }
  if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {};

  const clearList = () => {
    dispatch({ type: CLEAR_LIST });
  };
  const resetList = () => {
    dispatch({ type: RESET_LIST });
  };

  return (
    <div>
      {/* switch to state */}
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {/* switch to state */}

      {state.people.length < 1 ? (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={resetList}
        >
          reset
        </button>
      ) : (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={clearList}
        >
          clear
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
```

#### Remove Person Challenge

- remove single person
- hint extra property in the object

```js
import { useReducer } from 'react';
import { data } from '../../../data';

const CLEAR_LIST = 'CLEAR_LIST';
const RESET_LIST = 'RESET_LIST';
const REMOVE_ITEM = 'REMOVE_ITEM';

const defaultState = {
  people: data,
};

const reducer = (state, action) => {
  console.log(action);
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }
  if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }
  if (action.type === REMOVE_ITEM) {
    let newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    );

    return { ...state, people: newPeople };
  }

  return state;
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  const clearList = () => {
    dispatch({ type: CLEAR_LIST });
  };
  const resetList = () => {
    dispatch({ type: RESET_LIST });
  };

  return (
    <div>
      {/* switch to state */}
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {/* switch to state */}

      {state.people.length < 1 ? (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={resetList}
        >
          reset
        </button>
      ) : (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={clearList}
        >
          clear
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
```

#### Import / Export

- create new file - actions.js

  - copy/paste all actions
  - export/import actions

- create new file - reducer.js

  - copy/paste reducer
  - import actions
  - import data
  - export/import reducer

#### Performance

#### Lower State / Push The State Down

```js
import Starter from './tutorial/11-performance/starter/01-lower-state';
```

When Component Re-Renders :

- When the component's state or props change, React will re-render the component to reflect these changes.

- When the parent element re-renders, even if the component's state or props have not changed.

- lower state

```js
import { useState } from 'react';
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <button
      className='btn'
      onClick={() => setCount(count + 1)}
      style={{ marginBottom: '1rem' }}
    >
      count {count}
    </button>
  );
};
export default Counter;
```

#### Lower State Challenge

```js
import Starter from './tutorial/11-performance/starter/02-lower-state-challenge';
```

- fix the re-rendering
- hint addPerson fix

```js
import { useState } from 'react';

const Form = ({ addPerson }) => {
  const [name, setName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert('Please Provide Name Value');
      return;
    }
    addPerson(name);
    setName('');
  };
  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          name
        </label>
        <input
          type='text'
          name='name'
          id='name'
          className='form-input'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button className='btn btn-block' type='submit'>
        submit
      </button>
    </form>
  );
};
export default Form;
```

#### React.memo()

```js
import Starter from './tutorial/11-performance/starter/03-hooks';
```

React.memo is a higher-order component (HOC) in React that allows you to memoize a component. This means that if the input props to the component have not changed, the memoized component will return the same result from the previous render, instead of re-rendering. This can help improve performance by avoiding unnecessary render cycles.

The React.memo function takes a functional component as its argument and returns a new component that has the same behavior, but with the added optimization of checking if the props have changed. If the props have not changed, the memoized component will return the cached result from the previous render.

Here's an example of using React.memo

```js
const MyComponent = React.memo(function MyComponent(props) {
  /* render logic */
});
```

React.memo(Component) - returns memoized component

#### Function "Gotcha"

- setup remove person function

```js
const removePerson = (id) => {
  const newPeople = people.filter((person) => person.id !== id);
  setPeople(newPeople);
};
```

- pass it down to List and Person

#### UseCallback

The useCallback hook is a hook in React that allows you to memoize a function. It takes two arguments: the first is the function you want to memoize, and the second is an array of dependencies. The hook will return a memoized version of the function that only changes if one of the values in the dependency array changes.

By memoizing the function, you can avoid unnecessary re-renders and improve the performance of your React application. The function will only be re-created if one of its dependencies changes, otherwise the same instance of the function will be returned. This can be useful in situations where you have an expensive function that you only want to recompute when its dependencies change.

Here is an example of how you might use useCallback:

```js
import React, { useCallback, useState } from 'react';

function MyComponent() {
  const [data, setData] = useState([]);
  const handleClick = useCallback(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
```

In this example, the handleClick function is memoized using useCallback and the data prop is passed as a dependency. This means that the handleClick function will only be re-created if the data prop changes.

#### useCallback - Common Use Case

```js
import Final from './tutorial/02-useEffect/final/04-fetch-data';
```

```js
import { useState, useEffect, useCallback } from 'react';
const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);
  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url);
      const users = await response.json();
      setUsers(users);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  // rest of the logic
};
```

#### useMemo

The useMemo hook is a hook in React that allows you to memoize a value. It takes two arguments: the first is a function that returns the value you want to memoize, and the second is an array of dependencies. The hook will return the memoized value that will only change if one of the values in the dependency array changes.

By memoizing a value, you can avoid unnecessary calculations and improve the performance of your React application. The value will only be recalculated if one of its dependencies changes, otherwise the same instance of the value will be returned. This can be useful in situations where you have an expensive calculation that you only want to recompute when its dependencies change.

Here is an example of how you might use useMemo:

```js
import React, { useMemo } from 'react';

function MyComponent({ data }) {
  const processedData = useMemo(() => {
    return data.map((item) => item.toUpperCase());
  }, [data]);

  return (
    <div>
      {processedData.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}
```

In this example, the processedData value is memoized using useMemo and the data prop is passed as a dependency. This means that the processedData value will only be recalculated if the data prop changes.

- create slowFunction file
- setup a function
- import in index.js and set it equal to a value

```js
const slowFunction = () => {
  let value = 0;
  for (let i = 0; i <= 1000000000; i++) {
    value += i;
  }
  return value;
};

export default slowFunction;
```

#### useTransition

[JS Nuggets - Array.from](https://www.youtube.com/watch?v=zg1Bv4xubwo&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=11&t=666s)

```js
import Starter from './tutorial/11-performance/starter/04-react-18';
```

- useTransition is a React Hook that lets you update the state without blocking the UI.

```js
import { useState, useTransition } from 'react';
const LatestReact = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setText(e.target.value);

    startTransition(() => {
      const newItems = Array.from({ length: 5000 }, (_, index) => {
        return (
          <div key={index}>
            <img src='/vite.svg' alt='' />
          </div>
        );
      });
      setItems(newItems);
    });
  };
  return (
    <section>
      <form className='form'>
        <input
          type='text'
          className='form-input'
          value={text}
          onChange={handleChange}
        />
      </form>
      <h4>Items Below</h4>
      {isPending ? (
        'Loading...'
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            marginTop: '2rem',
          }}
        >
          {items}
        </div>
      )}
    </section>
  );
};
export default LatestReact;
```

#### Suspense API

The Suspense API is a feature in React that allows you to manage the loading state of your components. It provides a way to "suspend" rendering of a component until some data has been fetched, and display a fallback UI in the meantime. This makes it easier to handle asynchronous data loading and provide a smooth user experience in your React application.

Here is an example of how you might use the Suspense API:

```js
import React, { lazy, Suspense } from 'react';

const DataComponent = lazy(() => import('./DataComponent'));

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DataComponent />
    </Suspense>
  );
}
```

```js
import { useState, useTransition, lazy, Suspense } from 'react';
const SlowComponent = lazy(() => import('./SlowComponent'));
const LatestReact = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);
  const [isPending, startTransition] = useTransition();
  const [show, setShow] = useState(false);
  const handleChange = (e) => {
    setText(e.target.value);

    startTransition(() => {
      const newItems = Array.from({ length: 5000 }, (_, index) => {
        return (
          <div key={index}>
            <img src='/vite.svg' alt='' />
          </div>
        );
      });
      setItems(newItems);
    });
  };
  return (
    <section>
      <form className='form'>
        <input
          type='text'
          className='form-input'
          value={text}
          onChange={handleChange}
        />
      </form>
      <h4>Items Below</h4>
      {isPending ? (
        'Loading...'
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            marginTop: '2rem',
          }}
        >
          {items}
        </div>
      )}
      <button onClick={() => setShow(!show)} className='btn'>
        toggle
      </button>
      {show && (
        <Suspense fallback={<h4>Loading...</h4>}>
          <SlowComponent />
        </Suspense>
      )}
    </section>
  );
};
export default LatestReact;
```

- typical setup (wrap entire return in Suspense)

```js
return (
  <Suspense fallback={<h4>Loading...</h4>}>
    {/* rest of the logic */}
    <section>{show && <SlowComponent />}</section>
  </Suspense>
);
```

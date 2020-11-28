import React, {useState} from 'react'

export default function Hello() {
  const [count, setCount] = useState(0);

  function onClick() {
    console.log('### onClick')
    setCount(v => v + 1)
  }

  return <div>
    <div data-testid='count'>{count}</div>
    <button onClick={onClick}>Increase</button>
  </div>
};

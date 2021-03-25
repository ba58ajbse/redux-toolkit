import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TodoShow from './todoShow';
import { show, getTodoAsync } from './todoSlice'

const Jsontest = () => {
  const [num, setNum] = useState('')
  const dispatch = useDispatch()

  return (
    <div>
      <input type="text" value={num} onChange={(e) => setNum(e.target.value)} />
      <button type="button" onClick={() => dispatch(getTodoAsync(Number(num)))}>get</button>
      <button type="button" onClick={() => dispatch(show())}>show</button>
      <TodoShow />
    </div>
  )
}

export default Jsontest;
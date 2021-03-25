import React from 'react';
import { useSelector } from 'react-redux'
import { selectTodo } from './todoSlice'

const TodoShow = () => {
  const todoInfo = useSelector(selectTodo)

  return (
    <div>
      <ul>
        <li>userId: {todoInfo.userId}</li>
        <li>id: {todoInfo.id}</li>
        <li>title: {todoInfo.title}</li>
        <li>completed: {todoInfo.completed ? <span>done</span> : <span>none</span>}</li>
      </ul>
    </div>
  )
}

export default TodoShow;
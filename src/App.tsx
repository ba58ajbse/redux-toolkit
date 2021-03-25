import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Todo from './features/todo/todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Todo />
      </header>
    </div>
  );
}

export default App;

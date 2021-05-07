import React from 'react'
import TodoList from './todo/TodoList'

function App() {

  const todos = [
    {id:1, complited: false, title:'купить хлеб'},
    {id:2, complited: false, title:'купить руколо'},
    {id:3, complited: false, title:'купить масло'}
  ]

  return (
    <div className='wrapper'>
      <h1>TodoShka</h1>
      <TodoList todos={todos} />
    </div>  
  )
}

export default App;

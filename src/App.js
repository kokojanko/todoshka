import React from 'react'
import TodoList from './todo/TodoList'

function App() {
  const [todos, setTodos] =React.useState([
    {id:1, complited: false, title:'купить хлеб'},
    {id:2, complited: true, title:'купить руколо'},
    {id:3, complited: false, title:'купить масло'}
  ])

  function toggleTodo(id){
    setTodos( todos.map(todo => {
      if(todo.id === id){
        todo.complited = !todo.complited
      }
      return todo 
    }))
  }

  return (
    <div className='wrapper'>
      <h1>TodoShka</h1>
      <TodoList todos={todos} onToggle={toggleTodo}/>
    </div>  
  )
}

export default App;

import React from 'react'
import TodoList from './todo/TodoList'
import Context from './context'
import AddTodo from './todo/AddTodo'

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

  function removeTodo(id){
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      complited:false
    }]))
  }

  return (
    <Context.Provider value={{removeTodo}}>
      <div className='wrapper'>
        <h1>TodoShka</h1>
        <AddTodo onCreate={addTodo}/>
        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} /> : <p>nothing</p>}
        
      </div>  
    </Context.Provider>
  )
}

export default App;

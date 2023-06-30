import { useState } from 'react'
import { Todos } from './components/Todos'
import { type TodoId, type TodoCompleted } from './types'

const mockTodos = [
  {
    id: '1',
    title: 'Aprender React',
    completed: true
  },
  {
    id: '2',
    title: 'Crear los estilos',
    completed: false
  },
  {
    id: '3',
    title: 'Crear aplicación',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleComplete = ({ id, completed }: { id: TodoId, completed: TodoCompleted}:
  void => {

  }

  return (
    <div className='todoapp'>
      <Todos
        onRemoveTodo={handleRemove}
        todos={todos}
      />
    </div>
  )
}

export default App

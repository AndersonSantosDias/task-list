import { useState } from 'react'
import Header from '../Header/Header'
import TaskEditor from '../TaskEditor/TaskEditor'
import Task from '../Task/Task'
import ModalViw from '../Modal/Modal'


function Home() {
  const [todos, SetTodos] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [textoModal, setTextoModal] = useState('')
  const [editDelet, setEditDelet] = useState('')

  const abrir = (v, t, ED) =>{
    setOpenModal(v)
    setTextoModal(t)
    setEditDelet(ED)
  }

  const todoHandler = (todo) => {
    SetTodos([...todos, todo])
  }

  const deleteTodo = (id) => {
    var filtered = todos.filter((todo) => todo.id !== id)
    SetTodos(filtered)
  }

  return (
    <>
    <Header/>
    <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
    <TaskEditor todoHandler={todoHandler} />
    {todos.map( (todo, key) => (
      <div key={todo.id} >
        <Task todo={todo} deleteTodo={deleteTodo} modal={abrir}/>
      </div>
    ) )}
    <ModalViw isOpen={openModal} modal={abrir} texto={textoModal} tarefa={editDelet} />
    </>
  )
}

export default Home

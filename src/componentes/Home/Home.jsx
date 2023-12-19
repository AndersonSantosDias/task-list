import { useState } from 'react'
import Header from '../Header/Header'
import TaskEditor from '../TaskEditor/TaskEditor'
import Task from '../Task/Task'
import ModalViw from '../Modal/Modal'
import './index.scss'


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
    <h1>Otimize seu tempo e se organize com o nosso planejador diario.</h1>
    <section>
      <div>
        <TaskEditor todoHandler={todoHandler} />
        {todos.map( (todo, key) => (
          <div key={todo.id} >
            <Task todo={todo} deleteTodo={deleteTodo} modal={abrir}/>
          </div>
        ) )}
      </div>
      <textarea name="" id="" cols="40" rows="13" placeholder='Area reservada para observações a respeito das tarefas, como horarios ou metodos de execução'></textarea>
    </section>
    <ModalViw isOpen={openModal} modal={abrir} texto={textoModal} tarefa={editDelet} />
    </>
  )
}

export default Home

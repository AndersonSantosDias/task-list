import './index.scss'

const Task = ({todo, deleteTodo, modal}) => {

  function check (){
    let caixa = document.getElementById(todo.id)
    console.log(caixa.src)
    caixa.src == './box.svg' ? caixa.src = './box-check.svg' : caixa.src = './box.svg'
  }
  
  return (
    <section className='tarefa'>
        <p> {todo.text} </p>
        <img src="./box.svg" alt="" id={todo.id} onClick={check} />
      <span className='iten'>
          <img src="./edit.svg" alt="" onClick={() => modal(true, 'editar', todo.text)} />
          <img src="./delete.svg" alt="" onClick={ () => {
            modal(true, 'deletar', todo.text)
            deleteTodo(todo.id)
            }} />
      </span>
    </section>
  )
}

export default Task
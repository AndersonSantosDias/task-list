import './index.scss'

const Task = ({todo, deleteTodo, modal}) => {

  function check (){
    let caixa = document.getElementById(todo.id)
    caixa.src == 'https://task-list-desafiodnc.netlify.app/box.svg' ? caixa.src = 'https://task-list-desafiodnc.netlify.app/box-check.svg' : caixa.src = 'https://task-list-desafiodnc.netlify.app/box.svg'
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
import React from 'react'
import './index.scss'
import { useState } from 'react'
import { useEffect } from 'react'

const TaskEditor = ({todoHandler}) => {
  const [text, setText] = useState(null)
  const [id, setId] = useState(0)

  const todoCreate = (text) => {
    let entrada = document.getElementById('input')
    entrada.value == '' && exit(0);
    const todoObj = {text: text, id: id}
    setId(id + 1)
    todoHandler(todoObj)
    entrada.value = ''
  }

  return (
    <main className='conteudo'>
        <ul>
            <li id='destacado'>Tarefa</li>
            <li>Status</li>
            <li>Opções</li>
        </ul>
        <hr />
        <div className='edit'>
            <input type="text" id='input' placeholder='Nova Tarefa' onChange={(e) => setText(e.target.value)} />
            <img src="./add.svg" alt="" onClick={() => todoCreate(text)}/>
        </div>
    </main>
  )
}

export default TaskEditor
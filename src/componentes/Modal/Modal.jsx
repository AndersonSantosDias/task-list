import React from 'react'
import './index.scss'

const ModalViw = ({isOpen, modal, texto, tarefa}) => {

  return (
    <>
      {isOpen === true && ( 
        <div className="backgroud">
          <div className="container">
            <h1>Deseja {texto} Este item?</h1>
            <p> {tarefa} </p>
            <span>
              <button onClick={() => {modal(false)}}>Não</button>
              <button id='destaque' onClick={() => {modal(false) }} >Sim</button>
            </span>
          </div>
        </div>
      )}
    </>
  )
}

export default ModalViw
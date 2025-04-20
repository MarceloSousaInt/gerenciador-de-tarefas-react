import React, { useContext } from 'react';
import { TarefasContext } from '../context/TarefasContext';

// Este componente recebe uma "prop" chamada `tarefa`, que contém as informações de uma única tarefa.
function Tarefa({ tarefa }) {
  // Usamos o `useContext` para acessar as funções do nosso contexto de tarefas.
  const { toggleConcluida } = useContext(TarefasContext);

  return (
    <div>
      {/* Input do tipo checkbox. O `checked` é controlado pelo estado `concluida` da tarefa. */}
      <input
        type="checkbox"
        checked={tarefa.concluida}
        // Quando o checkbox muda de estado, chamamos a função `toggleConcluida` passando o ID da tarefa.
        onChange={() => toggleConcluida(tarefa.id)}
      />
      {/* Mostramos o texto da tarefa. Se a tarefa estiver concluída, aplicamos um estilo de "riscado". */}
      <span style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none' }}>
        {tarefa.texto}
      </span>
    </div>
  );
}

export default Tarefa;
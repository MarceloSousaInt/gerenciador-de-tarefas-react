import React, { useContext } from 'react';
import Tarefa from './Tarefa';
import { TarefasContext } from '../context/TarefasContext';

function ListaDeTarefas() {
  // Acessamos a lista de tarefas e o filtro do nosso contexto.
  const { tarefas, filtro } = useContext(TarefasContext);

  // Filtramos a lista de tarefas com base no filtro selecionado.
  const tarefasFiltradas = tarefas.filter((tarefa) => {
    if (filtro === 'Todas') return true; // Se o filtro for "Todas", mostramos todas as tarefas.
    if (filtro === 'Concluídas') return tarefa.concluida; // Se o filtro for "Concluídas", mostramos apenas as tarefas concluídas.
    if (filtro === 'Pendentes') return !tarefa.concluida; // Se o filtro for "Pendentes", mostramos apenas as tarefas não concluídas.
    return true; // Caso o filtro seja inválido, mostramos todas (por segurança).
  });

  return (
    <div>
      <h2>Tarefas:</h2>
      {/* Mapeamos a lista de tarefas filtradas e para cada tarefa, renderizamos o componente `Tarefa`, passando a tarefa como uma "prop". */}
      {tarefasFiltradas.map((tarefa) => (
        <Tarefa key={tarefa.id} tarefa={tarefa} />
      ))}
      {/* Se não houver nenhuma tarefa que corresponda ao filtro, mostramos uma mensagem. */}
      {tarefasFiltradas.length === 0 && <p>Nenhuma tarefa {filtro.toLowerCase()}.</p>}
    </div>
  );
}

export default ListaDeTarefas;
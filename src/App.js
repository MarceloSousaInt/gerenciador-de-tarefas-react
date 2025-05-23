import React, { useState, useContext } from 'react';
import ListaDeTarefas from './ListaDeTarefas';
import { TarefasContext } from '../context/TarefasContext';

function App() {
  const [novaTarefa, setNovaTarefa] = useState('');
  const { adicionarTarefa, setFiltro } = useContext(TarefasContext);

  const handleAdicionarTarefa = () => {
    if (novaTarefa.trim()) {
      adicionarTarefa(novaTarefa);
      setNovaTarefa('');
    }
  };

  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <div>
        <input
          type="text"
          placeholder="Adicionar nova tarefa"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button onClick={handleAdicionarTarefa}>Adicionar</button>
      </div>
      <div>
        <button onClick={() => setFiltro('Todas')}>Todas</button>
        <button onClick={() => setFiltro('Concluídas')}>Concluídas</button>
        <button onClick={() => setFiltro('Pendentes')}>Pendentes</button>
      </div>
      <ListaDeTarefas />
    </div>
  );
}

export default App;
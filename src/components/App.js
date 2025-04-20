import React, { useState, useContext } from 'react';
import ListaDeTarefas from './ListaDeTarefas';
import { TarefasContext } from '../context/TarefasContext';
import './App.css'; // Importe o arquivo de estilos.

function App() {
  const [novaTarefa, setNovaTarefa] = useState('');
  const { adicionarTarefa, setFiltro, setTarefas } = useContext(TarefasContext); // Importe setTarefas

  const handleAdicionarTarefa = () => {
    if (novaTarefa.trim()) {
      adicionarTarefa(novaTarefa);
      setNovaTarefa('');
    }
  };

  const handleResetTarefas = () => {
    // Limpa o estado global de tarefas.
    setTarefas([]);
    // Limpa o localStorage do navegador.
    localStorage.removeItem('gerenciadorDeTarefas_tarefas');
  };

  return (
    <div className="container">
      <div className="header">
        <h3>ACQA LINGUAGEM DE PROGRAMAÇÃO PARA A INTERNET</h3>
        <h3>1114517 - Marcelo dos Santos Sousa</h3>
        <h2>Gerenciador de Tarefas</h2>
      </div>
      <div className="input-section">
        <input
          type="text"
          placeholder="Adicionar uma nova tarefa"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button onClick={handleAdicionarTarefa}>Adicionar</button>
      </div>
      <div className="filter-buttons">
        <button onClick={() => setFiltro('Todas')}>Todas</button>
        <button onClick={() => setFiltro('Concluídas')}>Concluídas</button>
        <button onClick={() => setFiltro('Pendentes')}>Pendentes</button>
      </div>
      <ListaDeTarefas />
      <button className="reset-button" onClick={handleResetTarefas}>Limpar Tudo</button>
    </div>
  );
}

export default App;
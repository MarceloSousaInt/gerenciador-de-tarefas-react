import React, { createContext, useState, useEffect } from 'react';

export const TarefasContext = createContext();

export const TarefasProvider = ({ children }) => {
  const TAREFAS_KEY = 'gerenciadorDeTarefas_tarefas';

  const [tarefas, setTarefas] = useState(() => {
    const tarefasSalvas = localStorage.getItem(TAREFAS_KEY);
    return tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
  });

  const [filtro, setFiltro] = useState('Todas');

  useEffect(() => {
    localStorage.setItem(TAREFAS_KEY, JSON.stringify(tarefas));
  }, [tarefas]);

  const adicionarTarefa = (novaTarefa) => {
    setTarefas([...tarefas, { id: Date.now(), texto: novaTarefa, concluida: false }]);
  };

  const toggleConcluida = (id) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };

  return (
    <TarefasContext.Provider value={{ tarefas, adicionarTarefa, toggleConcluida, filtro, setFiltro, setTarefas }}>
      {children}
    </TarefasContext.Provider>
  );
};
import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import ListaTarefas from "./components/ListaTarefas";

function App() {

  

  const [inputText, setInputText] = useState("");
  const [tarefas, setTarefas] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTarefas, setFilteredTarefas] = useState([]);

  useEffect(() => {
    getLocalTarefas();
  },[]);

  useEffect(() => {
    filterHandler();
    saveLocalTarefas();
  }, [tarefas, status]);

  const filterHandler = () => {
    switch(status){
      case 'completas':
      setFilteredTarefas(tarefas.filter(tarefa => tarefa.completado === true));
      break;
      case 'incompletas':
      setFilteredTarefas(tarefas.filter(tarefa => tarefa.completado === false));
      break;
      default:
      setFilteredTarefas(tarefas);
      break;
    }
  };

  const saveLocalTarefas = () => {
    
      localStorage.setItem("tarefas", JSON.stringify(tarefas));
    
  };

  const getLocalTarefas = () => {
    if (localStorage.getItem("tarefas") === null){
      localStorage.setItem("tarefas", JSON.stringify([]));
    } else{
      let tarefasLocal = JSON.parse(localStorage.getItem("tarefas"))
      
      setTarefas(tarefasLocal);
    }
  };

  return (
    <div className="App">
      <header>
      <h1>Lista de Tarefas</h1>
      </header>
      <Form  setStatus={setStatus} inputText={inputText} tarefas={tarefas} setTarefas={setTarefas} setInputText={setInputText} />
      <ListaTarefas filteredTarefas={filteredTarefas} setTarefas = {setTarefas} tarefas = {tarefas} />
    </div>
  );
};

export default App;

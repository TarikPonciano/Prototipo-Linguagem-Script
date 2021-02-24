import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ListaTarefas from "./components/ListaTarefas";

function App() {
  const [inputText, setInputText] = useState("");
  const [tarefas, setTarefas] = useState([]);

  return (
    <div className="App">
      <header>
      <h1>Lista de Tarefas</h1>
      </header>
      <Form inputText={(inputText)} tarefas={tarefas} setTarefas={setTarefas} setInputText={setInputText} />
      <ListaTarefas setTarefas = {setTarefas} tarefas = {tarefas} />
    </div>
  );
};

export default App;

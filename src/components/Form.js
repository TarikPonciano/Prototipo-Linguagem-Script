import React from "react";

function Form({inputText,setInputText, tarefas, setTarefas}){

	const inputTextHandler = (e) =>{
		console.log(e.target.value);
		setInputText(e.target.value);
	};

	const submitTarefaHandler = (e) => {
		e.preventDefault();
		setTarefas([
			...tarefas, {text: inputText, completado: false, id: Math.random()*1000}
			]);
		setInputText('');
	};

	return(
		<form>
			<input value = {inputText} onChange={inputTextHandler} type="text" className="tarefa-input" />
			<button onClick={submitTarefaHandler} className="tarefa-button" type="submit">
				<i className="fas fa-plus-square"></i>
			</button>
			<div className="select">
				<select name="tarefas" className="tarefa-filtro">
					<option value="todas">Todas</option>
					<option value="completas">Completas</option>
					<option value="incompletas">Incompletas</option>
				</select>
			</div>
		</form>

		);
};

export default Form;
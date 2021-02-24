import React from "react";
import Tarefa from './Tarefa';

function ListaTarefas({ tarefas, setTarefas, filteredTarefas }) {
	console.log(tarefas);
	return(
		<div className="tarefas-container">
			<ul className="tarefas-lista">
				{filteredTarefas.map(tarefa => (
					<Tarefa setTarefas = {setTarefas} tarefas = {tarefas} tarefa={tarefa} key={tarefa.id} text={tarefa.text}/>
					))}
			</ul>
		</div>
		);
};

export default ListaTarefas;
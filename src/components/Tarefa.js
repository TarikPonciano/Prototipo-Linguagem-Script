import React from 'react';

function Tarefa({text, tarefa, tarefas, setTarefas}){

	const deleteHandler = () => {
		setTarefas(tarefas.filter((el) => el.id !== tarefa.id));
	};
	const completeHandler = () => {
		setTarefas(tarefas.map((item) =>{
			if (item.id===tarefa.id){
				return{
					...item, completado: !item.completado
					}
			}
			return item;
		}))
	}
	return(

		<div className="tarefa">
			<li className="tarefa-item">{text}</li>
			<button onClick={completeHandler} className="completar-btn">
				<i className="fas fa-check"></i>
			</button>
			<button onClick={deleteHandler} className="trash-btn">
				<i className="fas fa-trash"></i>
			</button>
		</div>

		)
};

export default Tarefa;
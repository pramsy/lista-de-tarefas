import TaskItem from "./TaskItem";
 
function TaskList({ tasks, onToggleTask, onRemoveTask }) {
 
    if (tasks.length === 0) {
        return (
            <div className="mt-6 rounded-xl border border-dashed border-slate-300 p-8 text-center">
                <p className="font-medium text-slate-700">Nenhuma tarefa encontrada neste filtro</p>
                <p className="mt-1 text-sm text-slate-500">Adicione uma tarefa ou escolha outro filtro</p>
            </div>
        );
    }
 
    return (
        <ul className="mt-6 space-y-3">
            {tasks.map((task) => (
                <TaskItem
                    key={tasks.id}
                    task={task}
                    onToggleTask={onToggleTask}
                    onRemoveTask={onRemoveTask}
                />
            ))}
        </ul>
    );
}
 
export default TaskList;
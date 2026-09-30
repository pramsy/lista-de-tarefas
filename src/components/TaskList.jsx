import TaskItem from "./TaskItem";
 
function TaskList({ tasks, totalTasks, onToggleTask, onRemoveTask }) {
    if (tasks.length === 0) {
        const hasNoTasks = totalTasks === 0;

        return (
            <div className="py-12 text-center">
                <p className="font-semibold text-[#354239]">
                    {hasNoTasks ? "Sua lista está vazia" : "Nenhuma tarefa encontrada"}
                </p>
                <p className="mt-1 text-sm text-[#68736b]">
                    {hasNoTasks
                        ? "Adicione sua primeira tarefa para começar."
                        : "Tente mudar os filtros de status ou prioridade."}
                </p>
            </div>
        );
    }

    return (
        <ul className="mt-5">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggleTask={onToggleTask}
                    onRemoveTask={onRemoveTask}
                />
            ))}
        </ul>
    );
}

export default TaskList;
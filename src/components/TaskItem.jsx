function TaskItem( {task, onToggleTask, onRemoveTask} ) {
    return (
    <li
        className="flex items-center gap-3 rounded-xl border border-slate-200 p-3">
        <input
            type="checkbox"
            checked={task.isCompleted}
            onChange={() => onToggleTask(task.id)}
            className="h-5 w-5 accent-indigo-600"></input>
        <span
            className={`min-w-0 flex-1 wrap-break-word ${task.isCompleted ? "text-slate-400 line-through" : "text-slate-800"}`}>
            {task.title}
        </span>
        <button
            type="button"
            className="shrink-0 rounded-lg px-3 py-2 text-sm font-medium text-rose-600 hover:bg-rose-50
            focus:outline-none
            focus:ring-2
            focus: ring-rose-200"
            onClick={() => onRemoveTask(task.id)}
        >Excluir</button>
 
    </li>
    );
}
 
export default TaskItem;
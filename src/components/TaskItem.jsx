function TaskItem({ task, onToggleTask, onRemoveTask }) {
    const priorityStyles = {
        Alta: "bg-[#fce8e3] text-[#a83f2b]",
        "Média": "bg-[#fff1d6] text-[#805c16]",
        Baixa: "bg-[#e3f1e9] text-[#28664e]",
    };
    const createdLabel = task.createdAt
        ? new Intl.DateTimeFormat("pt-BR", {
            day: "2-digit",
            month: "short",
            hour: "2-digit",
            minute: "2-digit",
        }).format(new Date(task.createdAt))
        : null;
    const dueLabel = task.dueAt
        ? new Intl.DateTimeFormat("pt-BR", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        }).format(new Date(task.dueAt))
        : null;

    return (
        <li className="flex items-start gap-3 border-b border-[#e6ebe5] py-4 first:pt-1 last:border-b-0">
            <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={() => onToggleTask(task.id)}
                aria-label={`Marcar ${task.title} como ${task.isCompleted ? "pendente" : "concluída"}`}
                className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-[#39765e]"
            />
            <div className="min-w-0 flex-1">
                <p className={`break-words text-sm font-semibold sm:text-base ${task.isCompleted ? "text-[#89938b] line-through" : "text-[#26372d]"}`}>
                    {task.title}
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                    {task.priority && (
                        <span className={`rounded px-2 py-1 text-xs font-bold ${priorityStyles[task.priority] ?? "bg-[#edf1ec] text-[#526057]"}`}>
                            {task.priority}
                        </span>
                    )}
                    {task.category && (
                        <span className="rounded bg-[#edf1ec] px-2 py-1 text-xs font-medium text-[#526057]">
                            {task.category}
                        </span>
                    )}
                    {dueLabel && (
                        <span className="text-xs font-medium text-[#526057]">
                            Prazo: {dueLabel}
                        </span>
                    )}
                    {createdLabel && (
                        <span className="text-xs text-[#89938b]">Criada em {createdLabel}</span>
                    )}
                </div>
            </div>
            <button
                type="button"
                className="min-h-10 shrink-0 rounded-md px-2 text-sm font-semibold text-[#a34a3c] transition hover:bg-[#fce8e3] focus:outline-none focus:ring-2 focus:ring-[#a34a3c]/30 sm:px-3"
                onClick={() => onRemoveTask(task.id)}
                aria-label={`Excluir tarefa: ${task.title}`}
            >
                Excluir
            </button>
        </li>
    );
}

export default TaskItem;
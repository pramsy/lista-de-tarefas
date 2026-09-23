import { useState } from "react";
 
function TaskForm({ onAddTask }) {
    const [title, setTitle] = useState("");
 
    function handleSubmit(event) {
        event.preventDefault(); // Impede o comportamento padrão de recarregamento do formulário
 
        const normalizedTitle = title.trim();
 
        if (!normalizedTitle) {
            return;
 
        }
 
        onAddTask(normalizedTitle);
        setTitle("");
    }
 
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
            <label htmlFor="task-title" className="sr-only">
                Título da nova tarefa
            </label>
 
            <input
                id="task-title"
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Digite uma tarefa"
                className="min-w-0 flex-1 rounded-lg border border-slate-300
          px-4 py-3 outline-none
          focus:border-indigo-500
          focus:ring-2
          focus:ring-indigo-200"
            >
            </input>
 
            <button
                type="submit"
                className="rounded-lg bg-indigo-600 px-5 py-3
            font-semibold text-white
            hover:bg-indigo-700"
            >
                Adicionar
            </button>
        </form>
    );
}
 
export default TaskForm;
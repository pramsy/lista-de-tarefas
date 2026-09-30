import { useState } from "react";

function TaskForm({ onAddTask }) {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [priority, setPriority] = useState("");
    const [dueAt, setDueAt] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const normalizedTitle = title.trim();

        if (!normalizedTitle) {
            return;
        }

        onAddTask(normalizedTitle, category, priority, dueAt);

        setTitle("");
        setCategory("");
        setPriority("");
        setDueAt("");
    }

    const fieldClasses = "w-full rounded-md border border-[#d8e0d9] bg-white px-3 py-3 text-sm text-[#202923] outline-none transition focus:border-[#39765e] focus:ring-2 focus:ring-[#39765e]/15";

    return (
        <form onSubmit={handleSubmit} className="border-b border-[#dce3dc] pb-6">
            <label htmlFor="task-title" className="mb-2 block text-sm font-semibold text-[#354239]">
                Adicionar tarefa
            </label>
            <div className="flex flex-col gap-2 sm:flex-row">
                
                <input
                    id="task-title"
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="O que você precisa fazer?"
                    className={`${fieldClasses} min-w-0 flex-1`}
                />
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3">
                <div>
                    <label htmlFor="task-category" className="mb-1.5 block text-xs font-semibold text-[#68736b]">
                        Categoria
                    </label>
                    <select
                        id="task-category"
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                        className={fieldClasses}
                    >
                        <option value="">Sem categoria</option>
                        <option value="Trabalho">Trabalho</option>
                        <option value="Estudos">Estudos</option>
                        <option value="Pessoal">Pessoal</option>
                        <option value="Compras">Compras</option>
                        <option value="Outros">Outros</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="task-priority" className="mb-1.5 block text-xs font-semibold text-[#68736b]">
                        Prioridade
                    </label>
                    <select
                        id="task-priority"
                        value={priority}
                        onChange={(event) => setPriority(event.target.value)}
                        className={fieldClasses}
                    >
                        <option value="">Sem prioridade</option>
                        <option value="Alta">Alta</option>
                        <option value="Média">Média</option>
                        <option value="Baixa">Baixa</option>
                    </select>
                </div>
            </div>
            <div className="mt-3 ">
                <label htmlFor="task-due-at" className="mb-1.5 block text-xs font-semibold text-[#68736b]">
                    Data e horário <span className="font-normal">(opcional)</span>
                </label>
                <input
                    id="task-due-at"
                    type="datetime-local"
                    value={dueAt}
                    onChange={(event) => setDueAt(event.target.value)}
                    className={fieldClasses}
                />
            </div>
            <div className="mt-3">
                <button type="submit"
                    className="min-h-11 w-full rounded-md bg-[#28664e] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1e513d] focus:outline-none focus:ring-2 focus:ring-[#39765e] focus:ring-offset-2 sm:w-auto"
                >
                    Adicionar tarefa
                </button>
            </div>
        </form>
    );
}

export default TaskForm;
const filters = [
    { value: "all", label: "Todas" },
    { value: "pending", label: "Pendentes" },
    { value: "completed", label: "Concluídas" },
];

function TaskFilters({ activeFilter, onChangeFilter, activePriority, onChangePriority }) {
    function getButtonClasses(buttonFilter) {
        const baseClasses = "min-h-10 rounded-md px-3 text-sm font-semibold transition";

        return activeFilter === buttonFilter
            ? `${baseClasses} bg-[#26372d] text-white`
            : `${baseClasses} text-[#68736b] hover:bg-[#edf1ec] hover:text-[#26372d]`;
    }

    return (
        <div className="flex flex-col gap-3 border-b border-[#dce3dc] py-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
                <span className="mb-1.5 block text-xs font-semibold text-[#68736b]">Status</span>
                <div className="inline-flex rounded-lg bg-[#edf1ec] p-1" aria-label="Filtrar por status">
                    {filters.map((filter) => (
                        <button
                            key={filter.value}
                            type="button"
                            onClick={() => onChangeFilter(filter.value)}
                            className={getButtonClasses(filter.value)}
                            aria-pressed={activeFilter === filter.value}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>
            </div>
            <div className="w-full sm:max-w-52">
                <label htmlFor="priority-filter" className="mb-1.5 block text-xs font-semibold text-[#68736b]">
                    Prioridade
                </label>
                <select
                    id="priority-filter"
                    value={activePriority}
                    onChange={(event) => onChangePriority(event.target.value)}
                    className="min-h-11 w-full rounded-md border border-[#d8e0d9] bg-white px-3 text-sm text-[#354239] outline-none focus:border-[#39765e] focus:ring-2 focus:ring-[#39765e]/15"
                >
                    <option value="all">Todas as prioridades</option>
                    <option value="Alta">Alta</option>
                    <option value="Média">Média</option>
                    <option value="Baixa">Baixa</option>
                    <option value="none">Sem prioridade</option>
                </select>
            </div>
        </div>
    );
}

export default TaskFilters;
const filters = [
    { value: "all", label: "Todas" },
    { value: "pending", label: "Pendentes" },
    { value: "completed", label: "Concluídas" },
];
 
function TaskFilters({ activeFilter, onChangeFilter }) {
 
    // Função para filtragem
    function getButtonClasses(buttonFilter) {
        const baseClasses = "rounded-lg px-3 py-2 text-sm font-medium";
 
        if (activeFilter === buttonFilter) {
            return `${baseClasses} bg-slate-900 text-white`;
        }
 
        return `${baseClasses} text-slate-600 hover:bg-slate-100`;
 
    }
 
    return (
        <div className="mt-5 flex flex-wrap gap-2 border-b border-slate-200 pb-4">
            {filters.map( (filter) => (
                <button
                key = {filter.value}
                type = "button"
                onClick={ () => onChangeFilter(filter.value)}
                className={getButtonClasses(filter.value)}
            >
                {filter.label}
            </button>
            ))}
        </div>
    );
}
 
export default TaskFilters;
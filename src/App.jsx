import { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskFilters from "./components/TaskFilters";

const initialTasks = [
  
];

const priorityOrder = { Alta: 0, "Média": 1, Baixa: 2 };

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");

  const remainingCount = tasks.filter((task) => !task.isCompleted).length;
  const completedCount = tasks.length - remainingCount;
  const completionPercentage = tasks.length
    ? Math.round((completedCount / tasks.length) * 100)
    : 0;

  const visibleTasks = tasks
    .filter((task) => {
      const matchesStatus =
        statusFilter === "all" ||
        (statusFilter === "pending" && !task.isCompleted) ||
        (statusFilter === "completed" && task.isCompleted);
      const matchesPriority =
        priorityFilter === "all" ||
        (priorityFilter === "none" && !task.priority) ||
        task.priority === priorityFilter;

      return matchesStatus && matchesPriority;
    })
    .sort(
      (firstTask, secondTask) =>
        (priorityOrder[firstTask.priority] ?? 3) -
        (priorityOrder[secondTask.priority] ?? 3),
    );

  function handleAddTask(title, category, priority, dueAt) {
    setTasks((currentTasks) => [
      ...currentTasks,
      {
        id: crypto.randomUUID(),
        title,
        category,
        priority,
        createdAt: new Date().toISOString(),
        dueAt: dueAt ? new Date(dueAt).toISOString() : null,
        isCompleted: false,
      },
    ]);
  }

  function handleToggleTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? { ...task, isCompleted: !task.isCompleted }
          : task,
      ),
    );
  }

  function handleRemoveTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId),
    );
  }

  return (
    <main className="min-h-screen bg-[#f4f6f2] px-4 py-8 text-[#202923] sm:py-12">
      <section className="mx-auto max-w-3xl">
        <header className="mb-8 flex flex-col gap-5 border-b border-[#dce3dc] pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#39765e]">
              Seu espaço de organização
            </p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Lista de tarefas
            </h1>
            <p className="mt-2 text-sm text-[#68736b]">
              {remainingCount === 0
                ? "Tudo em dia por aqui."
                : `${remainingCount} ${remainingCount === 1 ? "tarefa pendente" : "tarefas pendentes"}`}
            </p>
          </div>
          <div className="w-full max-w-48" aria-label={`${completionPercentage}% das tarefas concluídas`}>
            <div className="mb-2 flex justify-between text-xs font-semibold text-[#68736b]">
              <span>Progresso</span>
              <span>{completionPercentage}%</span>
            </div>
            <div
              className="h-2 overflow-hidden rounded-full bg-[#dce3dc]"
              role="progressbar"
              aria-valuenow={completionPercentage}
              aria-valuemin="0"
              aria-valuemax="100"
              aria-label="Tarefas concluídas"
            >
              <div
                className="h-full rounded-full bg-[#39765e] transition-[width] duration-300"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>
        </header>

        <TaskForm onAddTask={handleAddTask} />

        <TaskFilters
          activeFilter={statusFilter}
          onChangeFilter={setStatusFilter}
          activePriority={priorityFilter}
          onChangePriority={setPriorityFilter}
        />

        <TaskList
          tasks={visibleTasks}
          totalTasks={tasks.length}
          onToggleTask={handleToggleTask}
          onRemoveTask={handleRemoveTask}
        />
      </section>
    </main>
  );
}

export default App;
import { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskFilters from "./components/TaskFilters";
 
const initialTasks = [
  {
    id: "task-1",
    title: "Estudar componentes React",
    isCompleted: true,
  },
  {
    id: "task-2",
    title: "Praticar classes do Tailwind",
    isCompleted: false,
  },
];
 
function App() {
  const [tasks, setTasks] = useState(initialTasks); // estado do checkbox
  const [filter, setFilter] = useState("all"); // estado das tarefas
 
  const remaingCount = tasks.filter((task) => !task.isCompleted).length;
 
  const filteredTasks = tasks.filter((task) => {
    if (filter === "pending") {
      return !task.isCompleted;
    }
 
    if (filter === "completed") {
      return task.isCompleted;
    }
 
    return true;
  });
 
  // função para adição de tarefa
  function handleAddTask(title) {
 
    setTasks((currentTasks) => [
      ...currentTasks,
      {
        id: crypto.randomUUID(),
        title,
        isCompleted: false,
      },
    ]);
    
  }
 
 
  // função para mudança de estado da tarefa
  function handleToggleTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ?
          { ...task, isCompleted: !task.isCompleted }
          : task,),);
  }
 
 
 
  // função para remover tarefa
  function handleRemoveTask(taskId) {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskId),
    );
  }
 
 
 
  return (
    <main className="min-h-screen bg-slate-100 px-4
    py-10 text-slate-900">
      <section className="mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-lg">
 
        <header className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            React + Tailwind CSS
          </p>
          <h1 className="text-3xl font-bold tracking-tight">
            Lista de tarefas
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            {remaingCount} {remaingCount === 1 ? "tarefa pendente" : "tarefas pendentes"}.
          </p>
        </header>
 
        <TaskForm onAddTask={handleAddTask} />
 
        <TaskFilters
          activeFilter={filter}
          onChangeFilter={setFilter}
        />
 
        <TaskList
          tasks={filteredTasks}
          onToggleTask={handleToggleTask}
          onRemoveTask={handleRemoveTask}
        />
 
      </section>
    </main>
  );
}
 
export default App;
import "./App.css";

function App() {
  const [tasks, setTasks] = React.useState([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Build a project", completed: false },
  ]);

  const addTask = (title) => {
    const newTask = { id: tasks.length + 1, title, completed: false };
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <Header title="Todo List" />
      <TodoList tasks={tasks} />
      <AddTaskForm onAddTask={addTask} />
    </div>
  );
}

export default App;

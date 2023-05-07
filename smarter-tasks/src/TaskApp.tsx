import { useLocalStorage } from './hooks/useLocalStorage'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
import { TaskItem } from './types'

interface TaskAppState {
  tasks : TaskItem[]
}

export default function TaskAppFC() {
  const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>("tasks",{
    tasks: [],
  });

  const  addTask = (task :TaskItem) => {
    setTaskAppState({
      tasks : [...taskAppState.tasks , task]
    })
  }

  const deleteTask = (id: string) =>
  {
      setTaskAppState({
        tasks : taskAppState.tasks.filter(task => task.id !== id)
      })
  }

  return (
    <div className="container py-10 max-w-4xl mx-auto">
    <h1 className="text-3xl mb-2 font-bold text-slate-700">
      Smarter Tasks
    </h1>
    <h1 className="text-md mb-6 text-slate-600">
      <span className="font-bold">Project: </span>
      Graduation Final Year Project (Revamp college website)
    </h1>
    <div className="grid gap-4">
      <div className="border border-slate-200 w-full rounded-xl p-4">
        <h1 className="text-slate-500 text-2xl font-bold text-center mb-8">
          Pending
        </h1>
        <TaskForm addTask={addTask} />
        <TaskList tasks={taskAppState.tasks} deleteTask={deleteTask}/>
      </div>
    </div>
  </div>
  )
}

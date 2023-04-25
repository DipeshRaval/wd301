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

  const deleteTask = (title: string) =>
  {
      setTaskAppState({
        tasks : taskAppState.tasks.filter(task => task.title !== title)
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
    <div className="grid grid-cols-2 gap-4">
      <div className="border border-slate-200 rounded-xl p-4">
        <h1 className="text-slate-500 text-2xl font-bold text-center mb-2">
          Pending
        </h1>
        <TaskForm addTask={addTask} />
        <TaskList tasks={taskAppState.tasks} deleteTask={deleteTask}/>
      </div>
    </div>
  </div>
  )
}

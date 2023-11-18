import { useState } from 'react'

import { nanoid } from 'nanoid'

import { Header } from './components/Header'
import { TaskList } from './components/TaskList'
import { EmptyTaskList } from './components/EmptyTaskList'
import { StatusBar } from './components/StatusBar'

export type tasksProps = {
  id: string
  text: string
  isFinished: boolean
}

function App() {
  const [tasks, setTasks] = useState<tasksProps[]>([])

  const tasksCount = tasks.length

  const finishedTasksCount = tasks.filter(
    task => task.isFinished === true
  ).length

  function onAddTask(text: string) {
    const newTask: tasksProps = {
      id: nanoid(),
      text: text,
      isFinished: false
    }

    setTasks([newTask, ...tasks])
  }

  function onDeleteTask(taskId: string) {
    const updatedTasks = tasks.filter(task => task.id !== taskId)
    setTasks(updatedTasks)
  }

  function onToggleTaskIsFinished(taskId: string) {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, isFinished: !task.isFinished } : task
    )
    setTasks(updatedTasks)
  }

  return (
    <>
      <Header addTask={onAddTask} />
      <div className='bg-gray-600 flex min-h-[calc(100vh-200px)] relative items-start justify-center'>
        <div className='flex flex-col max-w-[46rem] w-[calc(100vw-1rem)]'>
          <StatusBar
            tasksCount={tasksCount}
            finishedTasksCount={finishedTasksCount}
          />
          {tasksCount === 0 ? (
            <EmptyTaskList />
          ) : (
            <TaskList
              ToggleTaskIsFinished={onToggleTaskIsFinished}
              DeleteTask={onDeleteTask}
              tasks={tasks}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default App

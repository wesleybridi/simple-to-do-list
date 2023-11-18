import { TrashIcon } from './TrashIcon'
import { StatusIcon } from './StatusIcon'

import { tasksProps } from '../App'

interface TaskListProps {
  tasks: tasksProps[]
  DeleteTask: (id: string) => void
  ToggleTaskIsFinished: (id: string) => void
}

export function TaskList({
  tasks,
  DeleteTask,
  ToggleTaskIsFinished
}: TaskListProps) {
  return (
    <div className='gap-3 flex flex-col max-w-[46rem] w-[calc(100vw-1rem)]'>
      {tasks.map(task => {
        return (
          <div
            key={task.id}
            className='bg-gray-500 rounded-lg flex gap-3 p-4 justify-between outline outline-2 outline-gray-400'
          >
            <div
              onClick={() => ToggleTaskIsFinished(task.id)}
              className='h-6 w-6 flex justify-center items-center'
            >
              <StatusIcon type={task.isFinished ? 'finished' : 'unfinished'} />
            </div>
            <p
              className={`flex flex-1 font-inter text-justify text-sm text-gray-100 ${
                task.isFinished && 'line-through text-gray-300'
              }`}
            >
              {task.text}
            </p>
            <TrashIcon hanleDeleteTask={() => DeleteTask(task.id)} />
          </div>
        )
      })}
    </div>
  )
}

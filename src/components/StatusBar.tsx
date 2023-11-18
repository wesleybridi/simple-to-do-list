interface StatusBarProps {
  tasksCount: number
  finishedTasksCount: number
}

export function StatusBar({ tasksCount, finishedTasksCount }: StatusBarProps) {
  return (
    <div className='flex justify-between mt-[5.6875rem] mb-6'>
      <div className='flex gap-2'>
        <p className='font-inter font-bold text-sm text-blue'>Created tasks</p>
        <div className='flex items-center bg-gray-400 pr-2 pl-2 h-[1.1875rem] font-inter font-bold rounded-lg text-white text-xs'>
          <p>{tasksCount}</p>
        </div>
      </div>
      <div className='flex gap-2'>
        <p className='font-inter font-bold text-sm text-purple'>Finished</p>
        <div className='flex items-center bg-gray-400 pr-2 pl-2 h-[1.1875rem] font-inter font-bold rounded-lg text-white text-xs'>
          <p>{finishedTasksCount}</p>
        </div>
      </div>
    </div>
  )
}

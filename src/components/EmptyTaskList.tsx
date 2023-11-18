export function EmptyTaskList() {
  return (
    <div>
      <div className='h-[1px] w-full bg-gray-400' />
      <div className='flex flex-col items-center gap-4 py-16 px-6'>
        <img src='../public/images/note.png' alt='image of a note' />
        <p className='font-inter text-center text-gray-300 font-bold'>
          You don't have any tasks at the moment
          <br />
          <span className='font-inter text-gray-300 font-normal'>
            Add a new task and organize your to do list
          </span>
        </p>
      </div>
    </div>
  )
}

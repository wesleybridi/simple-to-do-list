import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

interface HeaderProps {
  addTask: (text: string) => void
}

export function Header({ addTask }: HeaderProps) {
  const [newTaskText, setNewTaskText] = useState('')

  function handleNewTaskTextChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewTaskText(event.target.value)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('This field is required')
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    addTask(newTaskText)
    setNewTaskText('')
  }

  return (
    <header className='z-10 flex h-[200px] bg-gray-700 items-center justify-center relative'>
      <img
        src='../public/images/rocket.svg'
        alt='Image of a rockeat'
        className='h-9 mr-3'
      />
      <h1 className='text-blue font-inter font-black text-[2.5rem]'>
        to<span className='text-purple-dark'>do</span>
      </h1>
      <form
        onSubmit={handleSubmit}
        className='box-content absolute -bottom-7 flex max-w-[46rem] w-[calc(100vw-1rem)] h-14 gap-2'
      >
        <textarea
          name='task'
          value={newTaskText}
          onChange={handleNewTaskTextChange}
          onInvalid={handleNewTaskInvalid}
          className='resize-none rounded-lg text-justify flex flex-1 p-4 font-inter bg-gray-500 text-gray-100 placeholder:text-gray-300 border-none outline-none outline-offset-0 outline-gray-700 focus:outline-purple-dark'
          placeholder='Add a new task'
          required
        />
        <button
          type='submit'
          className={`bg-blue-dark w-[5.625rem] flex items-center justify-center gap-2 rounded-lg hover:bg-blue duration-150 ${
            newTaskText === '' &&
            'bg-gray-400 hover:bg-gray-400 cursor-not-allowed'
          }`}
        >
          <p className='font-inter font-bold text-white text-sm'>Add</p>
          <img
            src='../public/images/plus.svg'
            alt='Plus sign'
            className='w-4 h-4'
          />
        </button>
      </form>
    </header>
  )
}

import { useState } from 'react'

interface StatusIconProps {
  type: 'finished' | 'unfinished'
}

export function StatusIcon({ type }: StatusIconProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  return (
    <img
      className='hover:cursor-pointer'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      src={
        type === 'finished'
          ? `${
              isHovered
                ? '.././public/images/finished-hover.svg'
                : '.././public/images/finished.svg'
            }`
          : `${
              isHovered
                ? '.././public/images/unfinished-hover.svg'
                : '.././public/images/unfinished.svg'
            }`
      }
      alt='image of the status of the task'
    />
  )
}

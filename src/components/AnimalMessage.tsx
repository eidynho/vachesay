import { useContext } from 'react'
import { AnimalContext } from '../contexts/AnimalContext'
import { MessageContext } from '../contexts/MessageContext'
import { cow, bat, cat, dog, dolphin, ducks, fish, tux } from './AnimalsASCII'

export function AnimalMessage() {
  const { animal } = useContext(AnimalContext)
  const { message } = useContext(MessageContext)
  const emptyMessage = message.trim() === ''

  function maxRepeatMessageWall() {
    if (message.length <= 22) {
      return message.length + 1
    } else {
      return 27
    }
  }

  function animalInScreen() {
    if (animal === 'cow') {
      return cow
    }

    if (animal === 'bat') {
      return bat
    }

    if (animal === 'cat') {
      return cat
    }

    if (animal === 'dog') {
      return dog
    }

    if (animal === 'dolphin') {
      return dolphin
    }

    if (animal === 'ducks') {
      return ducks
    }

    if (animal === 'fish') {
      return fish
    }

    if (animal === 'tux') {
      return tux
    }
  }

  return (
    <>
      {
        !emptyMessage && (
          <div className="py-2 px-2 max-w-xs text-start">
            <span className="font-mono leading-none break-words">
              <>
                {'_'.repeat(maxRepeatMessageWall())} <br />
                {message}<br />
                {'-'.repeat(maxRepeatMessageWall())} <br />
                {animalInScreen()}
              </>
            </span>
          </div>
        )
      }
    </>
  )
}
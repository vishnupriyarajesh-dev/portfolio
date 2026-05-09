import { useEffect, useState } from 'react'

export const useTypingEffect = (words: string[], speed = 80, deleteSpeed = 40, pause = 1800) => {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pause)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setWordIndex(i => (i + 1) % words.length)
    } else {
      const next = isDeleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)
      timeout = setTimeout(() => setText(next), isDeleting ? deleteSpeed : speed)
    }
    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, speed, deleteSpeed, pause])

  return text
}
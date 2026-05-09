import { useEffect, useRef } from 'react'

export const useScrollAnimation = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('animate-in')
          observer.unobserve(element)
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return ref
}
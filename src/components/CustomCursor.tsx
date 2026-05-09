import { useEffect, useState } from 'react'

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    const move = (e: MouseEvent) => { setPos({ x: e.clientX, y: e.clientY }); setVisible(true) }
    const down = () => setClicked(true)
    const up = () => setClicked(false)
    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mousedown', down); window.removeEventListener('mouseup', up) }
  }, [])

  useEffect(() => {
    let frame: number
    const animate = () => {
      setTrail(prev => ({ x: prev.x + (pos.x - prev.x) * 0.12, y: prev.y + (pos.y - prev.y) * 0.12 }))
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [pos])

  if (!visible) return null
  return (
    <>
      <div style={{ position: 'fixed', left: pos.x - 5, top: pos.y - 5, width: 10, height: 10, borderRadius: '50%', background: '#0891b2', pointerEvents: 'none', zIndex: 9999, transform: clicked ? 'scale(0.5)' : 'scale(1)', transition: 'transform 0.1s ease' }} />
      <div style={{ position: 'fixed', left: trail.x - 20, top: trail.y - 20, width: 40, height: 40, borderRadius: '50%', border: '2px solid rgba(8,145,178,0.4)', pointerEvents: 'none', zIndex: 9998, boxShadow: '0 0 15px rgba(8,145,178,0.2)' }} />
    </>
  )
}
export default CustomCursor
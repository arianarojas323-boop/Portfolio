import React, { useState, useEffect } from 'react'

export default function ScrollHint({ opacity }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div style={{
      position:'fixed', left:'50%', bottom:'clamp(18px,3vh,34px)',
      transform:'translateX(-50%)', zIndex:6,
      display:'flex', flexDirection:'column', alignItems:'center', gap:9,
      opacity: visible ? opacity : 0,
      transition:'opacity 1s ease',
      pointerEvents:'none',
    }}>
      <span style={{fontFamily:"'Poppins',sans-serif",fontSize:'.64rem',letterSpacing:'.36em',textTransform:'uppercase',color:'#6E6555'}}>Scroll</span>
      <span style={{fontFamily:"'Poppins',sans-serif",fontSize:'.9rem',color:'#6E6555',animation:'hintPulse 1.8s ease-in-out infinite'}}>↓</span>
    </div>
  )
}
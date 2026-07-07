import React from 'react'

export default function Identity({ opacity }) {
  return (
    <header style={{
      position:'fixed', top:0, left:0, right:0,
      zIndex:6, opacity, transition:'opacity .6s ease',
      background:'#F2ECDF',
      display:'flex', alignItems:'center',
      padding:'0 clamp(18px,4vw,52px)',
      height:56,
      borderBottom:'1px solid rgba(27,23,19,.08)',
    }}>
      <div>
        <div style={{fontFamily:"'Inter',sans-serif",fontWeight:800,letterSpacing:'-.06em',fontSize:'1rem',color:'#1B1714'}}>
          Ariana Rojas
        </div>
        <div style={{fontFamily:"'Poppins',sans-serif",fontWeight:500,fontSize:'.55rem',letterSpacing:'.2em',textTransform:'uppercase',color:'#6E6555',marginTop:3}}>
          UX/UI · Product Design
        </div>
      </div>
    </header>
  )
}
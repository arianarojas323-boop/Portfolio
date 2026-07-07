import React from 'react'

export default function ProjectCard({ project, onOpen }) {
  return (
    <div
      onClick={() => onOpen(project)}
      style={{
        position:'relative', flex:'0 0 auto',
        width:'clamp(260px,28vw,400px)', cursor:'pointer',
        scrollSnapAlign:'start',
      }}
    >
      <div style={{
        position:'relative', width:'100%', aspectRatio:'4/5',
        borderRadius:18, overflow:'hidden',
        background:'#111', boxShadow:'0 18px 38px rgba(27,23,19,.18)',
        transition:'transform .5s cubic-bezier(.2,.75,.25,1)',
      }}
      onMouseEnter={e=>e.currentTarget.style.transform='translateY(-8px)'}
      onMouseLeave={e=>e.currentTarget.style.transform='translateY(0)'}
      >
        <img
          src={project.thumb}
          alt={project.title}
          style={{
            width:'100%', height:'100%', objectFit:'cover',
            display:'block', userSelect:'none', WebkitUserDrag:'none',
          }}
        />
        <div style={{
          position:'absolute', inset:0,
          background:'linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,.72) 100%)',
        }} />
        <div style={{
          position:'absolute', left:0, right:0, bottom:0,
          padding:'22px 24px',
          display:'flex', flexDirection:'column', gap:6,
        }}>
          <span style={{
            fontFamily:"'Poppins',sans-serif", fontWeight:500, fontSize:'.62rem',
            letterSpacing:'.22em', textTransform:'uppercase', color:'rgba(255,255,255,.65)',
          }}>{project.tag}</span>
          <span style={{
            fontFamily:"'Inter',sans-serif", fontWeight:800, letterSpacing:'-.03em',
            fontSize:'1.4rem', color:'#fff',
          }}>{project.title}</span>
        </div>
      </div>
    </div>
  )
}

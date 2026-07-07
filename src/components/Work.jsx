import React from 'react'
import ProjectCard from './ProjectCard.jsx'
import { PROJECTS } from '../data/projects.js'

export default function Work({ sectionRef, onOpenProject }) {
  return (
    <section
      id="work"
      ref={sectionRef}
      style={{
        minHeight:'100vh', padding:'clamp(60px,10vh,120px) 0 clamp(60px,10vh,100px)',
        display:'flex', flexDirection:'column', justifyContent:'center',
        position:'relative', zIndex:2, background:'#F2ECDF',
      }}
    >
      <div style={{padding:'0 clamp(24px,6vw,90px)', marginBottom:46}}>
        <span style={{
          fontFamily:"'Poppins',sans-serif", fontWeight:500, fontSize:'.62rem',
          letterSpacing:'.28em', textTransform:'uppercase', color:'#9A8F7C',
        }}>Selected work</span>
        <h2 style={{
          fontFamily:"'Inter',sans-serif", fontWeight:800, letterSpacing:'-.05em',
          fontSize:'clamp(2.2rem,5vw,4rem)', margin:'10px 0 0', color:'#1B1714',
        }}>Projects</h2>
      </div>

      <div
        className="work-scroll"
        style={{
          display:'flex', gap:28, overflowX:'auto', overflowY:'hidden',
          padding:'16px clamp(24px,6vw,90px) 28px',
          scrollSnapType:'x proximity',
        }}
      >
        {PROJECTS.map(p => (
          <ProjectCard key={p.id} project={p} onOpen={onOpenProject} />
        ))}
      </div>
    </section>
  )
}

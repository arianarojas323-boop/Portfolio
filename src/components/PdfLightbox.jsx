import React, { useEffect, useRef } from 'react'

/**
 * Full-screen dark overlay that embeds a PDF via <iframe>.
 * Receives `project` — one of the PROJECTS data objects — or null when closed.
 */
export default function PdfLightbox({ project, onClose }) {
  const overlayRef = useRef(null)

  /* lock body scroll while open */
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [project])

  /* Escape key to close */
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  /* animate opacity */
  useEffect(() => {
    const el = overlayRef.current
    if (!el) return
    if (project) {
      el.style.visibility = 'visible'
      requestAnimationFrame(() => { el.style.opacity = '1' })
    } else {
      el.style.opacity = '0'
      setTimeout(() => { if (el.style.opacity === '0') el.style.visibility = 'hidden' }, 450)
    }
  }, [project])

  return (
    <div
      ref={overlayRef}
      style={{
        position:'fixed', inset:0, zIndex:50,
        background:'#0B0B0E',
        display:'flex', flexDirection:'column',
        opacity:0, visibility:'hidden',
        transition:'opacity .45s ease',
      }}
    >
      {/* ── header bar ── */}
      <div style={{
        flex:'0 0 auto', display:'flex', alignItems:'center',
        justifyContent:'space-between',
        padding:'16px clamp(18px,4vw,40px)',
        borderBottom:'1px solid rgba(255,255,255,.1)',
      }}>
        <div style={{display:'flex', alignItems:'baseline', gap:12}}>
          <span style={{fontFamily:"'Inter',sans-serif",fontWeight:800,letterSpacing:'-.06em',fontSize:'1.05rem',color:'#F2ECDF'}}>
            {project?.title}
          </span>
          <span style={{fontFamily:"'Poppins',sans-serif",fontWeight:400,fontSize:'.72rem',letterSpacing:'.16em',textTransform:'uppercase',color:'#8C8C95'}}>
            Full case study
          </span>
        </div>
        <button
          onClick={onClose}
          style={{
            display:'inline-flex', alignItems:'center', gap:8,
            fontFamily:"'Poppins',sans-serif", fontWeight:500, fontSize:'.74rem',
            letterSpacing:'.16em', textTransform:'uppercase',
            color:'#F2ECDF', background:'transparent', cursor:'pointer',
            border:'1px solid rgba(255,255,255,.25)', borderRadius:100,
            padding:'8px 16px', transition:'background .3s ease',
          }}
          onMouseEnter={e=>e.currentTarget.style.background='rgba(255,255,255,.1)'}
          onMouseLeave={e=>e.currentTarget.style.background='transparent'}
        >
          Close ✕
        </button>
      </div>

      {/* ── PDF viewer ── */}
      <div style={{flex:'1 1 auto', overflow:'hidden', display:'flex', flexDirection:'column'}}>
        {project?.pdf ? (
          <iframe
            key={project.pdf}          /* remount when project changes */
            src={project.pdf + '#toolbar=1&navpanes=0&scrollbar=1&view=FitH'}
            title={project?.title + ' case study'}
            style={{
              flex:'1 1 auto', width:'100%', border:'none',
              background:'#0B0B0E',
            }}
          />
        ) : (
          /* no PDF yet – placeholder */
          <div style={{
            flex:'1 1 auto', display:'flex', flexDirection:'column',
            alignItems:'center', justifyContent:'center', gap:16,
            color:'rgba(255,255,255,.3)',
          }}>
            <span style={{fontSize:'3rem'}}>📄</span>
            <p style={{fontFamily:"'Poppins',sans-serif",fontSize:'.9rem',letterSpacing:'.06em',textTransform:'uppercase'}}>
              Case study coming soon
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

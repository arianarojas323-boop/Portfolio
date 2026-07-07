import React from 'react'

const EXPERIENCE = [
  { role:'UX/UI Designer Intern', org:'Neura Robotics', period:'03.2026 — Present',
    desc:'Redesigned the full application used by engineers and operators to monitor and command robot systems, including robotic arms and humanoid robots, rethinking the entire interface architecture to make technically complex information easy to read and act on.' },
  { role:'UX/UI Designer Intern', org:'BrissaNova', period:'09.2025 — 12.2025',
    desc:'Led UX design for a Mixed Reality application from concept to interactive prototype, defining user flows, interaction models, and spatial interface patterns optimized for immersive 3D environments.' },
  { role:'Freelance Designer', org:'Freelance / Independent Studio', period:'01.2023 — 12.2025',
    desc:'Designed complete visual identities for 3 clothing and lifestyle brands, logo, typography, color palette, and social media templates, delivering brand guidelines clients could apply independently across all channels.' },
  { role:'Design & Communication Assistant', org:'Equal Opportunities Program – ITCR', period:'03.2023 — 07.2025',
    desc:'Produced accessible visual materials, infographics, digital posters, event guides, for disability awareness campaigns, applying plain language and high-contrast design principles.' },
]

const SKILLS = ['UX Research','UI Design','Prototyping','Industrial Design','Figma','CAD / SolidWorks','Front-end (React)','Design Systems']

export default function CV({ sectionRef }) {
  return (
    <section
      id="cv"
      ref={sectionRef}
      style={{
        minHeight:'100vh', padding:'clamp(70px,12vh,130px) clamp(24px,6vw,90px)',
        display:'flex', flexDirection:'column', justifyContent:'center',
        position:'relative', zIndex:2, background:'#F2ECDF',
      }}
    >
      <div style={{maxWidth:920, width:'100%', margin:'0 auto'}}>
        <span style={{
          fontFamily:"'Poppins',sans-serif", fontWeight:500, fontSize:'.62rem',
          letterSpacing:'.28em', textTransform:'uppercase', color:'#9A8F7C',
        }}>Curriculum</span>
        <h2 style={{
          fontFamily:"'Inter',sans-serif", fontWeight:800, letterSpacing:'-.05em',
          fontSize:'clamp(2.2rem,5vw,4rem)', margin:'10px 0 40px', color:'#1B1714',
        }}>Experience</h2>

        <div style={{display:'flex', flexDirection:'column', gap:34, marginBottom:54}}>
          {EXPERIENCE.map((e,i)=>(
            <div key={i} style={{
              display:'flex', flexWrap:'wrap', gap:'6px 24px', alignItems:'baseline',
              borderBottom:'1px solid rgba(27,23,19,.12)', paddingBottom:26,
            }}>
              <div style={{flex:'1 1 280px'}}>
                <h3 style={{fontFamily:"'Inter',sans-serif",fontWeight:700,letterSpacing:'-.02em',fontSize:'1.15rem',margin:0,color:'#1B1714'}}>{e.role}</h3>
                <p style={{fontFamily:"'Poppins',sans-serif",fontSize:'.86rem',color:'#6E6555',margin:'4px 0 0'}}>{e.org}</p>
              </div>
              <span style={{fontFamily:"'Poppins',sans-serif",fontSize:'.78rem',color:'#9A8F7C',whiteSpace:'nowrap'}}>{e.period}</span>
              <p style={{flexBasis:'100%',fontFamily:"'Poppins',sans-serif",fontWeight:400,fontSize:'.92rem',lineHeight:1.6,color:'#574F43',margin:'6px 0 0'}}>{e.desc}</p>
            </div>
          ))}
        </div>

        <h3 style={{fontFamily:"'Inter',sans-serif",fontWeight:800,letterSpacing:'-.03em',fontSize:'1.3rem',margin:'0 0 18px',color:'#1B1714'}}>Skills</h3>
        <div style={{display:'flex', flexWrap:'wrap', gap:10, marginBottom:48}}>
          {SKILLS.map(s=>(
            <span key={s} style={{
              fontFamily:"'Poppins',sans-serif", fontWeight:500, fontSize:'.78rem',
              padding:'8px 16px', borderRadius:100, border:'1px solid rgba(27,23,19,.18)',
              color:'#1B1714',
            }}>{s}</span>
          ))}
        </div>

        <a
          href="/assets/cv.pdf"
          target="_blank"
          rel="noreferrer"
          style={{
            display:'inline-flex', alignItems:'center', gap:10,
            fontFamily:"'Poppins',sans-serif", fontWeight:500, fontSize:'.92rem',
            color:'#1B1714', textDecoration:'none', cursor:'pointer',
            paddingBottom:5, borderBottom:'1.5px solid #1B1714',
          }}
        >Download full CV <span style={{fontSize:'1.05em'}}>↓</span></a>
        {/* NOTE: place your résumé PDF at public/assets/cv.pdf */}
      </div>
    </section>
  )
}

import React from 'react'

const SOCIALS = [
  { label:'LinkedIn', url:'https://www.linkedin.com/in/ariana-rojas-a18001339/' },
  { label:'Behance', url:'https://www.behance.net/arianarojas9' },
]

export default function Contact({ sectionRef }) {
  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        minHeight:'100vh', padding:'clamp(70px,14vh,150px) clamp(24px,6vw,90px)',
        display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
        textAlign:'center', position:'relative', zIndex:2, background:'#F2ECDF',
      }}
    >
      <span style={{
        fontFamily:"'Poppins',sans-serif", fontWeight:500, fontSize:'.62rem',
        letterSpacing:'.28em', textTransform:'uppercase', color:'#9A8F7C',
      }}>Let's talk</span>

      <h2 style={{
        fontFamily:"'Inter',sans-serif", fontWeight:800, letterSpacing:'-.05em',
        fontSize:'clamp(2.4rem,7vw,5.6rem)', margin:'14px 0 24px', color:'#1B1714',
        maxWidth:'14ch',
      }}>Get in contact</h2>

      <a
        href="mailto:arianarojas323@gmail.com"
        style={{
          fontFamily:"'Inter',sans-serif", fontWeight:700, letterSpacing:'-.02em',
          fontSize:'clamp(1.1rem,2.4vw,1.6rem)', color:'#1B1714', textDecoration:'none',
          paddingBottom:6, borderBottom:'1.5px solid #1B1714', marginBottom:38,
        }}
      >arianarojas323@gmail.com</a>

      <div style={{display:'flex', gap:26, marginTop:10}}>
        {SOCIALS.map(s=>(
          <a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily:"'Poppins',sans-serif", fontWeight:500, fontSize:'.78rem',
              letterSpacing:'.12em', textTransform:'uppercase', color:'#6E6555', textDecoration:'none',
            }}
          >{s.label}</a>
        ))}
      </div>

      <p style={{
        fontFamily:"'Poppins',sans-serif", fontSize:'.72rem', letterSpacing:'.08em',
        color:'#9A8F7C', marginTop:80,
      }}>© {new Date().getFullYear()} Ariana Rojas. All rights reserved.</p>
    </section>
  )
}
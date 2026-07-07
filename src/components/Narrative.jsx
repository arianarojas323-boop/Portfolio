import React from 'react'

/* ---- shared styles ---- */
const BIG = {
  fontFamily:"'Inter',sans-serif", fontWeight:800,
  letterSpacing:'-.06em', lineHeight:.98, margin:0, textWrap:'balance',
}
const RISE = {
  opacity:0, transform:'translateY(46px)', filter:'blur(8px)',
  transition:'opacity .9s cubic-bezier(.2,.75,.25,1), transform 1.05s cubic-bezier(.2,.75,.25,1), filter .9s ease',
}
const RISE_SLOW = {
  ...RISE,
  transition:'opacity .95s cubic-bezier(.2,.75,.25,1), transform 1.1s cubic-bezier(.2,.75,.25,1), filter .95s ease',
}
const SUB = {
  fontFamily:"'Poppins',sans-serif", fontWeight:400,
  color:'#6E6555', margin:'18px 0 0',
}

/* scene wrapper */
function Scene({fx,fy,fs,fo,ff, align='center', children, style={}}) {
  const ai = align==='left'?'flex-start': align==='right'?'flex-end':'center'
  const ta = align==='left'?'left'       : align==='right'?'right'      :'center'
  return (
    <section
      data-scene="" data-fx={fx} data-fy={fy} data-fs={fs} data-fo={fo} data-fface={ff}
      style={{
        minHeight:'100vh', display:'flex', flexDirection:'column',
        alignItems:ai, justifyContent:'center', textAlign:ta,
        padding:'clamp(24px,6vw,90px)', boxSizing:'border-box',
        position:'relative', zIndex:2, ...style,
      }}
    >{children}</section>
  )
}

export default function Narrative({ onGoWork }) {
  return (
    <main id="fish-region">

      {/* 1 */}
      <Scene fx={33} fy={56} fs={.55} fo={.92} ff={-1}>
        <h1 data-rise="" style={{...BIG,...RISE,fontSize:'clamp(3.5rem,12vw,11rem)',lineHeight:.95}}>Hey.</h1>
      </Scene>

      {/* 2 */}
      <Scene fx={54} fy={44} fs={.58} fo={.92} ff={1} align="left">
        <h2 data-rise="" style={{...BIG,...RISE,fontSize:'clamp(2.4rem,6vw,4.8rem)',maxWidth:'16ch'}}>
          Thanks for stopping by.
        </h2>
      </Scene>

      {/* 3 */}
      <Scene fx={48} fy={54} fs={.66} fo={1} ff={-1} align="right">
        <h2 data-rise="" style={{...BIG,...RISE,fontSize:'clamp(2.8rem,7.4vw,7rem)'}}>I'm a fish.</h2>
        <p  data-rise="" style={{...SUB,...RISE,fontSize:'clamp(.95rem,1.4vw,1.15rem)',maxWidth:'30ch'}}>Nice to meet you. I'll be your guide.</p>
      </Scene>

      {/* 4 */}
      <Scene fx={62} fy={40} fs={.55} fo={.95} ff={1}>
        <h2 data-rise="" style={{...BIG,...RISE,fontSize:'clamp(2.6rem,6.6vw,5.4rem)'}}>I'll show you around.</h2>
        <p  data-rise="" style={{...SUB,...RISE,fontSize:'clamp(.9rem,1.3vw,1.05rem)',letterSpacing:'.04em',margin:'20px 0 0'}}>Just keep scrolling.</p>
      </Scene>

      {/* 5 */}
      <Scene fx={66} fy={58} fs={.58} fo={.95} ff={1} align="left">
        <h2 data-rise="" style={{...BIG,...RISE_SLOW,fontSize:'clamp(2.6rem,7vw,6.4rem)',maxWidth:'13ch'}}>
          Every designer has a way of seeing.
        </h2>
      </Scene>

      {/* 6 */}
      <Scene fx={34} fy={42} fs={.55} fo={.95} ff={-1}>
        <h2 data-rise="" style={{...BIG,...RISE_SLOW,fontSize:'clamp(2.8rem,7.2vw,6.6rem)'}}>Ariana sees systems.</h2>
      </Scene>

      {/* 7 */}
      <Scene fx={40} fy={56} fs={.58} fo={.95} ff={-1} align="right">
        <h2 data-rise="" style={{...BIG,...RISE,fontSize:'clamp(2.4rem,6vw,5rem)',maxWidth:'15ch'}}>
          She likes understanding how things work.
        </h2>
        <p  data-rise="" style={{...SUB,...RISE,fontSize:'clamp(.95rem,1.4vw,1.15rem)',maxWidth:'30ch'}}>And making them easier.</p>
        
      </Scene>

      {/* 8 */}
      <Scene fx={66} fy={44} fs={.56} fo={.95} ff={1} align="left">
        <h2 data-rise="" style={{...BIG,...RISE,fontSize:'clamp(2.6rem,6.6vw,5.6rem)',maxWidth:'13ch'}}>Humans are complicated.</h2>
      </Scene>

      {/* 9 */}
      <Scene fx={34} fy={52} fs={.56} fo={.95} ff={-1} align="right">
        <h2 data-rise="" style={{...BIG,...RISE,fontSize:'clamp(2.6rem,6.6vw,5.6rem)'}}>Machines too.</h2>
      </Scene>

      {/* 10 */}
      <Scene fx={40} fy={64} fs={.55} fo={.95} ff={-1}>
        <h2 data-rise="" style={{...BIG,...RISE,fontSize:'clamp(2.6rem,6.6vw,5.8rem)',maxWidth:'16ch'}}>That's why she likes both.</h2>
      </Scene>

      {/* 11 */}
      <Scene fx={70} fy={58} fs={.60} fo={0} ff={1} align="left">
        <h2 data-rise="" style={{...BIG,...RISE_SLOW,fontSize:'clamp(2.6rem,6.8vw,6rem)',maxWidth:'12ch'}}>
          Designing between humans and technology.
        </h2>
      </Scene>

      {/* 12 — Statement / bio — LAST narrative scene */}
      <Scene fx={74} fy={26} fs={.50} fo={0} ff={1} align="left">
        <div data-scene="" style={{maxWidth:'min(820px,82vw)'}}>
          <h2 data-rise="" style={{
            ...BIG,...RISE_SLOW,fontSize:'clamp(2.9rem,8vw,7.4rem)',
          }}>I make machines feel human.</h2>

          <p data-rise="" style={{
            fontFamily:"'Poppins',sans-serif", fontWeight:400,
            fontSize:'clamp(1rem,1.5vw,1.18rem)', lineHeight:1.65,
            color:'#574F43', margin:'30px 0 0', maxWidth:'54ch',
            ...RISE,
            transition:'opacity 1s cubic-bezier(.2,.75,.25,1), transform 1.15s cubic-bezier(.2,.75,.25,1), filter 1s ease',
          }}>
            Industrial design engineer working in UX and product design.
            I work where hardware logic meets human experience, from cognitive
            robotics to wearables to mixed-reality interfaces. The hardest design
            problems live exactly at that intersection: complex systems that real
            people have to actually use.
          </p>
        </div>
      </Scene>

    </main>
  )
}

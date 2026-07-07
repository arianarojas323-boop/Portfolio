import React, { useEffect, useRef, useState, useCallback } from 'react'
import Identity from './components/Identity.jsx'
import ScrollHint from './components/ScrollHint.jsx'
import Fish from './components/Fish.jsx'
import Narrative from './components/Narrative.jsx'
import Work from './components/Work.jsx'
import CV from './components/CV.jsx'
import Contact from './components/Contact.jsx'
import PdfLightbox from './components/PdfLightbox.jsx'

export default function App() {
  const fishRef = useRef(null)
  const navRef = useRef(null)
  const workRef = useRef(null)
  const cvRef = useRef(null)
  const contactRef = useRef(null)

  const [activeSection, setActiveSection] = useState('top')
  const [chromeOpacity, setChromeOpacity] = useState(1)
  const [activeProject, setActiveProject] = useState(null)

  /* ---------- scroll-driven fish animation ---------- */
  useEffect(() => {
    const fishRegion = document.getElementById('fish-region')
    if (!fishRegion) return

    const scenes = Array.from(fishRegion.querySelectorAll('[data-scene]'))

    let ticking = false

    const lerp = (a, b, t) => a + (b - a) * t

    const update = () => {
      ticking = false
      const vh = window.innerHeight
      const vw = window.innerWidth
      const viewportCenter = window.scrollY + vh / 2

      // Find current + next scene based on viewport center vs scene centers
      let current = scenes[0]
      let next = scenes[0]
      let progress = 0

      for (let i = 0; i < scenes.length; i++) {
        const rect = scenes[i].getBoundingClientRect()
        const top = rect.top + window.scrollY
        const center = top + rect.height / 2

        if (viewportCenter >= center) {
          current = scenes[i]
          next = scenes[i + 1] || scenes[i]
        }
      }

      const curRect = current.getBoundingClientRect()
      const curTop = curRect.top + window.scrollY
      const curCenter = curTop + curRect.height / 2

      const nextRect = next.getBoundingClientRect()
      const nextTop = nextRect.top + window.scrollY
      const nextCenter = nextTop + nextRect.height / 2

      const span = nextCenter - curCenter
      progress = span > 0 ? Math.min(1, Math.max(0, (viewportCenter - curCenter) / span)) : 0

      const fx = lerp(parseFloat(current.dataset.fx), parseFloat(next.dataset.fx), progress)
      const fy = lerp(parseFloat(current.dataset.fy), parseFloat(next.dataset.fy), progress)
      const fs = lerp(parseFloat(current.dataset.fs), parseFloat(next.dataset.fs), progress)
      const fo = lerp(parseFloat(current.dataset.fo), parseFloat(next.dataset.fo), progress)
      const ff = progress < 0.5 ? parseFloat(current.dataset.fface) : parseFloat(next.dataset.fface)

      // Apply to fish
      const fish = fishRef.current
      if (fish && fish.wrapper) {
        const px = (fx / 100) * vw
        const py = (fy / 100) * vh
        fish.wrapper.style.transform = `translate(${px}px, ${py}px) scale(${fs})`
        fish.wrapper.style.opacity = fo
        if (fish.facer) {
          fish.facer.style.transform = `scaleX(${ff})`
        }
      }

      // Reveal [data-rise] elements within scenes near viewport
      scenes.forEach(scene => {
        const rect = scene.getBoundingClientRect()
        const visible = rect.top < vh * 0.78 && rect.bottom > vh * 0.22
        const riseEls = scene.querySelectorAll('[data-rise]')
        riseEls.forEach((el, idx) => {
          if (visible) {
            el.style.transitionDelay = `${idx * 90}ms`
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
            el.style.filter = 'blur(0px)'
          } else if (rect.top >= vh * 0.78) {
            // below viewport — reset for re-entry
            el.style.transitionDelay = '0ms'
            el.style.opacity = '0'
            el.style.transform = 'translateY(46px)'
            el.style.filter = 'blur(8px)'
          }
        })
      })

      // Chrome (nav/identity/hint) opacity: fade hint out after first scene,
      // fade everything based on whether we're past narrative region
      const fishRegionRect = fishRegion.getBoundingClientRect()
      const pastNarrative = fishRegionRect.bottom < vh * 0.5
      setChromeOpacity(1)

      // Active nav section detection
      let newActive = 'top'
      if (workRef.current) {
        const r = workRef.current.getBoundingClientRect()
        if (r.top < vh * 0.5 && r.bottom > vh * 0.2) newActive = 'work'
      }
      if (cvRef.current) {
        const r = cvRef.current.getBoundingClientRect()
        if (r.top < vh * 0.5 && r.bottom > vh * 0.2) newActive = 'cv'
      }
      if (contactRef.current) {
        const r = contactRef.current.getBoundingClientRect()
        if (r.top < vh * 0.5 && r.bottom > vh * 0.2) newActive = 'contact'
      }
      if (!pastNarrative && newActive === 'top') {
        // still within fish narrative
      }
      setActiveSection(prev => (prev !== newActive ? newActive : prev))
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    update()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  /* ---------- nav click handler ---------- */
  const scrollToSection = useCallback((key) => {
    if (key === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const map = { work: workRef, cv: cvRef, contact: contactRef }
    const ref = map[key]
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  const goToWork = useCallback((e) => {
    e?.preventDefault?.()
    if (workRef.current) {
      workRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <>
      <Identity opacity={chromeOpacity} />
      <ScrollHint opacity={activeSection === 'top' ? chromeOpacity : 0} visible={activeSection === 'top'} />
      <Fish ref={fishRef} />

      <Narrative onGoWork={goToWork} />

      <Work sectionRef={workRef} onOpenProject={setActiveProject} />
      <CV sectionRef={cvRef} />
      <Contact sectionRef={contactRef} />

      <PdfLightbox project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  )
}

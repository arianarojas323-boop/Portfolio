import mielinaThumb from '../assets/mielina-thumb.jpg'
import signThumb from '../assets/sign-language-thumb.jpg'
import xrThumb from '../assets/xr.png'
import neuraThumb from '../assets/neura.png'
/**
 * Central data source for the project grid / lightbox.
 * `pdf` points to a static file served from /public/assets,
 * so it is just a string path — Vite copies /public as-is.
 */
export const PROJECTS = [
  {
    id: 'mielina',
    tag: '01 — Wearable / Medtech',
    title: 'Mielina',
    thumb: mielinaThumb,
    pdf: '/assets/parkinson.pdf',
  },
  {
    id: 'sign-language',
    tag: '02 — Mixed Reality / Accessibility',
    title: 'Sign Language',
    thumb: signThumb,
    pdf: '/assets/sign.pdf',
  },
  {
    id: 'xr-app',
    tag: '03 — Mixed Reality',
    title: 'MR Shooting Scenarios',
    thumb: xrThumb,
    pdf:'/assets/xr.pdf',
  },
  {
    id: 'neura',
    tag: '04 — Robotics',
    title: 'Robotics controller / Interfaces',
    thumb: neuraThumb,
    pdf:'/assets/neura.pdf',
  },
]

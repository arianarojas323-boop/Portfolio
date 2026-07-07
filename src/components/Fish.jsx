import React, { useImperativeHandle, useRef } from 'react'
import fishImg from '../assets/fish.webp'

const Fish = React.forwardRef(function Fish(_props, ref) {
  const wrapperRef = useRef(null)
  const facerRef  = useRef(null)

  useImperativeHandle(ref, () => ({
    get wrapper(){ return wrapperRef.current },
    get facer(){   return facerRef.current  },
  }))

  return (
    <div ref={wrapperRef} style={{
      position:'fixed', left:0, top:0, zIndex:1,
      width:300, opacity:0, pointerEvents:'none', willChange:'transform,opacity',
    }}>
      <div style={{animation:'swimDrift 11s ease-in-out infinite', willChange:'transform'}}>
        <div style={{animation:'bob 8s ease-in-out infinite', willChange:'transform'}}>
          <div ref={facerRef} style={{transition:'transform .8s cubic-bezier(.4,0,.2,1)', transformOrigin:'center'}}>
            <img
              src={fishImg} alt=""
              style={{width:'100%',height:'auto',display:'block',userSelect:'none',
                      WebkitUserDrag:'none',
                      filter:'drop-shadow(0 18px 26px rgba(46,103,178,.22))'}}
            />
          </div>
        </div>
      </div>
    </div>
  )
})

export default Fish

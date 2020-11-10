import React, {useRef } from 'react'
import { useCanvas, ScrollScene } from '@14islands/r3f-scroll-rig'
import WobblyTextMesh from './WobblyTextMesh'


const Text = ({ children, className, style, as ='div' }) => {
  const ref = useRef()

  useCanvas(
    <ScrollScene el={ref} debug={false} margin={100}>
      {({ scale, state }) => (
        <WobblyTextMesh
          el={ref}
          font={'https://fonts.gstatic.com/s/philosopher/v9/vEFV2_5QCwIS4_Dhez5jcWBuT0s.woff'}
          state={state}
          scale={scale}
        >
          {children}
        </WobblyTextMesh>
      )}
    </ScrollScene>,
  )

  const Element = as

  return (
    <Element ref={ref} className={className} style={{ ...style }}>
      {children}
    </Element>
  )
}

export default Text

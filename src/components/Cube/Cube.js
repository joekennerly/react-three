import { useEffect } from 'react'
import { init, animate } from './CubeGenerator'

function Cube() {
  useEffect(() => {
    init()
    animate()
  }, [])
  // needs a unique id if used in multiple places
  return (
    <div id="graphics-container" />
  )
}

export default Cube



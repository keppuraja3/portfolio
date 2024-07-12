import React from 'react'
import { Tilt } from 'react-tilt'

function home() {
    const defaultOptions = {
        reverse:        false,  // reverse the tilt direction
        max:            35,     // max tilt rotation (degrees)
        perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed:          1000,   // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,    // If the tilt effect has to be reset on exit.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }
  return (
    <>
    <div className=' d-flex justify-content-center align-items-center h-100 '>
        <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
          <div className=" h-100 p-3 " style={{backdropFilter: 'blur(5px)', transition: 'all .09'}}>
            <h2>3D Card</h2>
            <p>Hover over this card to see the 3D effect.</p>
          </div>
        </Tilt>
    </div>
    </>
  )
}

export default home
import React from 'react'
import wave from '../images/wavetop.svg'
import styled from 'styled-components'


const Background = () => {
  return (
    <div>
    <img src={wave} alt="Imagen wave" className='imagen' loading='lazy'/>
    </div>
  )
}

export default Background
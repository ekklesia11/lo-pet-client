import React from 'react';
import pet1 from './styles/img/pet-5.jpg'
import cat1 from './styles/img/cat-1.jpg'
import './styles/MainImages.css'

export default function MainImages() {
  return (
    <div>
      <div  className='main-image'>
        <img src={pet1} alt='' className='each-image'/>
      </div>
      <div  className='main-image'>
        <img src={cat1} alt='' className='each-image'/>
      </div>
    </div>
  )
}

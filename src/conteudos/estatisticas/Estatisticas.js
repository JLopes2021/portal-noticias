import React from 'react'
import Slider from 'react-touch-drag-slider'
import images from './carousel/images/images'
import styles from './Estatisticas.module.css'

function Estatisticas() {

  return (
    <Slider interval={1000}
      onSlideComplete={(i) => {
        console.log('finished dragging, current slide is', i)
      }}
      onSlideStart={(i) => {
        console.log('started dragging on slide', i)
      }}
      activeIndex={0}
      threshHold={1000}
      transition={0.1}
      scaleOnDrag={true}
    >

      {images.map(({ url, title, rodape }, index) => (
        <figure className={styles.figure}>
          <img 
            src={url}
            key={index}
            alt={title} />
            <figcaption><p>{rodape}</p></figcaption>
        </figure>

      ))}






    </Slider>
  )
}

export default Estatisticas;
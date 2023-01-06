import Carousel from 'nuka-carousel/lib/carousel'
import { slider } from '../../utils/slider' 
import useChangeBackgroundImage from '../../hooks/useChangeBackgroundImage'
import styles from './WordsSlider.module.css'

const interval = 10000
const WordsSlider = () => {
  const { handleCarouselChange }  = useChangeBackgroundImage()

  return (
    <div className={styles.containerCarousel} >
      <Carousel autoplayInterval={interval} autoplay withoutControls wrapAround afterSlide={handleCarouselChange}>
        {slider.map( ({ title, price }) => (
          <div key={title} className={styles.sliderItem}>
            <h3>{title}</h3><div>{price}</div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default WordsSlider


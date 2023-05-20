import { Carousel } from 'antd';
import styles from './HeroCarousel.module.css'

const HeroCarousel = () => (
  <Carousel effect="fade" 
    dotPosition='bottom'
    autoplay
  >
    <div className={`${styles.caro_image_box}`}>
      <img src={'images/backgrounds/background-04.jpg'} alt='hero_image'></img>
    </div>
    <div className={`${styles.caro_image_box}`}>
      <img src={'/images/backgrounds/background-05.jpg'} alt='hero_image'></img>
    </div>
    <div className={`${styles.caro_image_box}`}>
      <img src={'/images/backgrounds/background-13.jpg'} alt='hero_image'></img>
    </div>
    <div className={`${styles.caro_image_box}`}>
      <img src={'/images/backgrounds/background-09.jpg'} alt='hero_image'></img>
    </div>
  </Carousel>
);
export default HeroCarousel;
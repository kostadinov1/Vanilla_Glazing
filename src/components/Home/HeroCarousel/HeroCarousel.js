import { Carousel } from 'antd';
import styles from './HeroCarousel.module.css'

const HeroCarousel = () => (
  <Carousel effect="fade" 
    dotPosition='top'
    autoplay
  >
    <div className={`${styles.caro_image_box}`}>
      <img src={'images/backgrounds/background-01.jpg'} alt='hero_image'></img>
    </div>
    <div className={`${styles.caro_image_box}`}>
      <img src={'/images/backgrounds/background-02.jpg'} alt='hero_image'></img>
    </div>
    <div className={`${styles.caro_image_box}`}>
      <img src={'/images/backgrounds/background-03.jpg'} alt='hero_image'></img>
    </div>
    <div className={`${styles.caro_image_box}`}>
      <img src={'/images/backgrounds/background-04.jpg'} alt='hero_image'></img>
    </div>
  </Carousel>
);
export default HeroCarousel;
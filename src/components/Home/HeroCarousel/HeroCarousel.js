import { Carousel } from 'antd';
import styles from './HeroCarousel.module.css'

const HeroCarousel = () => (
  <Carousel effect="fade" 
    dotPosition='bottom'
    autoplay
  >
    <div className={`${styles.caro_image_box}`}>
      <img src={'images/custom/custom-06.jpg'} alt='hero_image'></img>
    </div>
    <div className={`${styles.caro_image_box}`}>
    <img src={'images/custom/custom-05.jpg'} alt='hero_image'></img>
    </div>
    <div className={`${styles.caro_image_box}`}>
    <img src={'images/custom/custom-01.jpeg'} alt='hero_image'></img>
    </div>
    <div className={`${styles.caro_image_box}`}>
    <img src={'images/custom/custom-03.jpg'} alt='hero_image'></img>
    </div>
    <div className={`${styles.caro_image_box}`}>
    <img src={'images/custom/custom-04.jpg'} alt='hero_image'></img>
    </div>


  </Carousel>
);
export default HeroCarousel;
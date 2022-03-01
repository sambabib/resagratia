import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// @data
import { reviews } from '../../data/carouselData'

// @icons
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

// @styling
import './carousel.scss';

const Carousel = () => {
  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='carousel'>
      <div className='carousel__container'>
        <Slider {...sliderSettings}>
          {reviews.map((review) => (
            <div className='carousel__items__container' key={review.id}>
              <div className='carousel__items'>
                <div className='carousel__review'>
                  <p>{review.details}</p>
                </div>
                <div className='carousel__user__info'>
                  <div className='carousel__rating'>
                    {[...Array(5)].map((star, index) => {
                      return (
                        <p className={star} key={index}>
                          <StarRateRoundedIcon className='star__icon' />
                        </p>
                      );
                    })}
                  </div>
                  <h3 className='carousel__user'>{review.user}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;

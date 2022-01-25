import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

  const reviews = [
    {
      id: 1,
      user: 'Samuel',
      details: `I'm loving the shortcuts. I'm learning a lot.`,
    },

    {
      id: 2,
      user: 'Priyanka',
      details: `Educator has in-depth knowledge about the topic. Happy to learn new and interesting things`,
    },
    {
      id: 3,
      user: 'Jonathan',
      details: `Thanks so much for putting this course together. The course is packed with so many practical tips and easy to follow guides. I enjoyed every bit of the time I spent on it and learnt so much also.`,
    },
    {
      id: 4,
      user: 'Sulaiman',
      details: `It's a no-brainer that this course is top notch. I have learnt a lot from watching just the first three videos/modules!. I'm really excited about this.`,
    },
    {
      id: 5,
      user: 'Aboniyi',
      details: `Awesome experience. It was an exceptional hands-on training.`,
    },
    {
      id: 6,
      user: 'Oluwatobi',
      details: `The tutor's approach to teaching is top-notch and 100% practical. I would recommend this course to Excel users of any level of proficiency. This course arguably ranks among my top 3 online courses ever.`,
    },
    {
      id: 7,
      user: 'Jinesh',
      details: `Explained in the most simple language.`,
    },
    {
      id: 8,
      user: 'Catherine',
      details: `The pace of this one is good, given there is an expectation of basic Excel knowledge. I'm learning more useful tips and tricks more quickly than I expected. Thank you!`,
    },
    {
      id: 9,
      user: 'Tony',
      details: `It was a packed course, I learned so much in a short time. I never knew excel had so many capabilities. Instructor was very knowledgeable in this area.`,
    },
    {
      id: 10,
      user: 'Elizabeth',
      details: `It was very good for me. Amazing!!!`,
    },
  ];

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

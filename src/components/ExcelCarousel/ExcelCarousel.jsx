import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// @assets
import user1 from '../../assets/user1.jpg';
import user2 from '../../assets/user2.jpg';
import user3 from '../../assets/user3.jpg';

// @styling
import './excelcarousel.scss';

const ExcelCarousel = () => {
  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    swipeToSlide: true,
  };

  const reviews = [
    {
      id: 1,
      user: 'Samuel',
      details: `I'm loving the shortcuts. I'm learning a lot.`,
      img: user1,
    },

    {
      id: 2,
      user: 'Priyanka',
      details: `Educator has in-depth knowledge about the topic. Happy to learn new and interesting things`,
      img: user2,
    },
    {
      id: 3,
      user: 'Jonathan',
      details: `Thanks so much for putting this course together. The course is packed with so many practical tips and easy to follow guides. I enjoyed every bit of the time I spent on it and learnt so much also.`,
      img: user3,
    },
    {
      id: 4,
      user: 'Sulaiman',
      details: `It's a no-brainer that this course is top notch. I have learnt a lot from watching just the first three videos/modules!. I'm really excited about this.`,
      img: user1,
    },
    {
      id: 5,
      user: 'Aboniyi',
      details: `Awesome experience. It was an exceptional hands-on training.`,
      img: user1,
    },
    {
      id: 6,
      user: 'Oluwatobi',
      details: `The tutor's approach to teaching is top-notch and 100% practical. I would recommend this course to Excel users of any level of proficiency. This course arguably ranks among my top 3 online courses ever.`,
      img: user1,
    },
  ];

  return (
    <div className='carousel'>
      <div className='carousel__container'>
        <Slider {...sliderSettings}>
          {reviews.map((review) => (
            <div className='carousel__items__container'>
              <div className='carousel__items' key={review.id}>
                <div className='carousel__user__info'>
                  <img src={review.img} alt='users' />
                  <h3 className='carousel__user'>{review.user}</h3>
                </div>
                <div className='carousel__review'>
                  <p>{review.details}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ExcelCarousel;

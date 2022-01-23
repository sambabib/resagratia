import { Link } from 'react-router-dom';

// @styling
import './homecontent.scss';

// @assets
import HeroImg from '../../assets/hero-img.jpg';
import Excel from '../../assets/excel.png';
import PowerBi from '../../assets/powerbi.png';
import Sql from '../../assets/mysql.png';
import Tableau from '../../assets/tableau.png';
import PetrolHands from '../../assets/petrol-hands.jpg';
import Electricity from '../../assets/electricity-cables.jpg';
import Banks from '../../assets/dollar-bills.jpg';

// @icons
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import SentimentSatisfiedRoundedIcon from '@mui/icons-material/SentimentSatisfiedRounded';
import ComputerRoundedIcon from '@mui/icons-material/ComputerRounded';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const HomeContent = () => {
  return (
    <div className='home__content'>
      <div className='home__content__container'>
        {/* Hero section */}
        <div className='hero'>
          <div className='hero__text__container'>
            <div className='hero__text'>
              <div className='hero__text__top'>
                <h1 className='hero__text__heading'>Research.</h1>
              </div>
              <div className='hero__text__bottom'>
                <h1 className='hero__text__heading'>Business Intelligence.</h1>
                <h1 className='hero__text__heading'>Data Analytics.</h1>
              </div>
              <div className='hero__text__paragraph'>
                <p>
                  Learn from Industry Experts. Designed for Students &
                  Professionals
                </p>
              </div>
            </div>

            {/* Join for free button */}
            <div className='hero__button'>
              <Link to='/signup'>Join for Free</Link>{' '}
            </div>
          </div>

          {/* Hero image */}
          <div className='hero__img'>
            <img src={HeroImg} alt='hero' />
          </div>
        </div>

        {/* Course section */}
        <div className='courses'>
          <div className='courses__container'>
            {/* courses box container */}
            <div className='course__box__container'>
              {/* each course box */}
              <div className='course__box'>
                <div className='course__box__main'>
                  <div className='course__box__heading__container'>
                    <p className='course__heading'>Course</p>
                    <p className='course__title'>Microsoft Excel</p>
                  </div>
                  <div className='course__image'>
                    <img src={Excel} alt='microsoft excel' />
                  </div>
                </div>
                <div className='view__course'>
                  <p>View Course</p>
                  <ArrowForwardIosRoundedIcon className='arrow__forward__icon' />
                </div>
              </div>

              <div className='course__box'>
                <div className='course__box__main'>
                  <div className='course__box__heading__container'>
                    <p className='course__heading'>Course</p>
                    <p className='course__title'>Power BI</p>
                  </div>
                  <div className='course__image'>
                    <img src={PowerBi} alt='power bi' />
                  </div>
                </div>
                <div className='view__course'>
                  <p>View Course</p>
                  <ArrowForwardIosRoundedIcon className='arrow__forward__icon' />
                </div>
              </div>

              <div className='course__box'>
                <div className='course__box__main'>
                  <div className='course__box__heading__container'>
                    <p className='course__heading'>Course</p>
                    <p className='course__title'>SQL</p>
                  </div>
                  <div className='course__image'>
                    <img src={Sql} alt='mysql' />
                  </div>
                </div>
                <div className='view__course'>
                  <p>View Course</p>
                  <ArrowForwardIosRoundedIcon className='arrow__forward__icon' />
                </div>
              </div>

              <div className='course__box'>
                <div className='course__box__main'>
                  <div className='course__box__heading__container'>
                    <p className='course__heading'>Course</p>
                    <p className='course__title'>Tableau</p>
                  </div>
                  <div className='course__image'>
                    <img src={Tableau} alt='tableau' />
                  </div>
                </div>
                <div className='view__course'>
                  <p>View Course</p>
                  <ArrowForwardIosRoundedIcon className='arrow__forward__icon' />
                </div>
              </div>
            </div>

            {/* Text description for courses */}
            <div className='courses__description'>
              <div className='courses__description__heading'>
                <h2 className='courses__description__title'>
                  Courses to learn in Data Analysis
                </h2>
              </div>
              <h3 className='courses__description__subheading'>
                Popular courses to learn now
              </h3>
              <p className='courses__description__paragraph'>
                Do you need help with figuring out what to learn? We have a
                great selection of courses to choose from. See what’s top of our
                list and get recommended courses to skill up.
              </p>

              {/* Explore more courses */}
              <div className='explore__course'>
                <p>Explore more courses</p>
                <ArrowForwardIosRoundedIcon className='arrow__forward__icon' />
              </div>
            </div>
          </div>
        </div>

        {/* perks */}
        <div className='perks'>
          <div className='perks__container'>
            <div className='perks__heading'>
              <h2>What to expect from a Resagratia course</h2>
            </div>

            <div className='perks__items'>
              <div className='perk'>
                <SentimentSatisfiedRoundedIcon className='sentiment__icon' />
                <div className='perk__description'>
                  <h3 className='perk__heading'>Learn at your own pace</h3>
                  <p className='perk__paragraph'>
                    Enjoy learning from home without a set schedule and an
                    easy-to-follow method. You set your own timetable.
                  </p>
                </div>
              </div>

              <div className='perk'>
                <ComputerRoundedIcon className='computer__icon' />
                <div className='perk__description'>
                  <h3 className='perk__heading'>Get front row seats</h3>
                  <p className='perk__paragraph'>
                    Videos of the highest quality, so you don't miss a single
                    detail. With unlimited access, you can watch them as many
                    times as you need to perfect your technique.
                  </p>
                </div>
              </div>

              <div className='perk'>
                <ThumbUpRoundedIcon className='thumbs__icon' />
                <div className='perk__description'>
                  <h3 className='perk__heading'>
                    Learn from the best professionals
                  </h3>
                  <p className='perk__paragraph'>
                    Learn valuable methods and techniques explained by top
                    experts in the creative sector.
                  </p>
                </div>
              </div>

              <div className='perk'>
                <PeopleRoundedIcon className='people__icon' />
                <div className='perk__description'>
                  <h3 className='perk__heading'>Share knowledge and ideas</h3>
                  <p className='perk__paragraph'>
                    Ask questions, request feedback, or offer solutions. Share
                    your learning experience with other students in the
                    community who are as passionate as you about creativity.
                  </p>
                </div>
              </div>

              <div className='perk'>
                <BookmarkRoundedIcon className='school__icon' />
                <div className='perk__description'>
                  <h3 className='perk__heading'>Meet expert instructors</h3>
                  <p className='perk__paragraph'>
                    Each instructor teaches what they do best, with clear
                    guidelines, true passion, and professional insight in every
                    lesson.
                  </p>
                </div>
              </div>

              <div className='perk'>
                <CheckCircleRoundedIcon className='check__icon' />
                <div className='perk__description'>
                  <h3 className='perk__heading'>
                    Watch professionally produced courses
                  </h3>
                  <p className='perk__paragraph'>
                    Resagratia produces every course in-house to ensure a
                    high-quality online learning experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Explore Research */}
        <div className='explore__research'>
          <div className='explore__research__container'>
            <h2 className='research__heading'>Explore Research</h2>
            <h3 className='research__subheading'>
              Find research subjects curated by us
            </h3>
            {/* research items */}
            <div className='research__items'>
              <div className='research__item'>
                <div className='research__item__img'>
                  <img src={PetrolHands} alt='by Luca Nardone from Pexels' />
                </div>
                <div className='research__item__tag free'>
                  <p>Free</p>
                </div>
                <div className='research__item__description'>
                  <h3 className='research__item__title'>
                    Fuel Prices in Nigeria
                  </h3>
                  <div className='view__research__course'>
                    <p>View Product</p>
                    <ArrowForwardIosRoundedIcon className='arrow__forward__icon' />
                  </div>
                </div>
              </div>

              <div className='research__item'>
                <div className='research__item__img'>
                  <img src={Electricity} alt='electricity cables' />
                </div>
                <div className='research__item__tag free'>
                  <p>Free</p>
                </div>
                <div className='research__item__description'>
                  <h3 className='research__item__title'>
                    Cost of Electricity in Nigeria
                  </h3>
                  <div className='view__research__course'>
                    <p>View Product</p>
                    <ArrowForwardIosRoundedIcon className='arrow__forward__icon' />
                  </div>
                </div>
              </div>

              <div className='research__item'>
                <div className='research__item__img'>
                  <img src={Banks} alt='by David McBee from Pexels' />
                </div>
                <div className='research__item__tag premium'>
                  <p>Premium</p>
                </div>
                <div className='research__item__description'>
                  <h3 className='research__item__title'>
                    Financial Performance of Banks in Nigeria
                  </h3>
                  <div className='view__research__course'>
                    <p>View Product</p>
                    <ArrowForwardIosRoundedIcon className='arrow__forward__icon' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Join for free */}
        <div className='join__for__free'>
          <div className='join__for__free__container'>
            <div className='join__for__free__description'>
              <div className='join__for__free__text'>
                <p className='join__for__free__paragraph'>
                  Ready to advance your career?
                </p>
                <p className='join__for__free__talk'>
                  Prefer to <span>talk to us</span>?
                </p>
              </div>
              <div className='join__for__free__button'>
                <Link to='/signup'>
                  <p>Join for Free</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;

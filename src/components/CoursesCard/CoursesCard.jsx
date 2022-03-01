// @icons
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

// @styling
import './coursescard.scss';

const CoursesCard = ({ title, img }) => {
  return (
    <div className="course__card">
      <div className='course__card__box'>
        <div className='course__card__box__main'>
          <div className='course__card__box__heading__container'>
            <p className='course__heading'>Course</p>
            <p className='course__title'>{title}</p>
          </div>
          <div className='course__image'>
            <img src={img} alt='tableau' />
          </div>
        </div>
        <div className='view__course'>
          <p>View Course</p>
          <ArrowForwardIosRoundedIcon className='arrow__forward__icon' />
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;

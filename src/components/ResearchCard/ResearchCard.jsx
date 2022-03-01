// @icons
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

// @styling
import './researchcard.scss';

const ResearchCard = ({ title, img, tag }) => {
  return (
    <div className='research__card'>
      <div className='research__card__item'>
        <div className='research__card__item__img'>
          <img src={img} alt={title} />
        </div>
        <div className={`research__card__item__tag ${tag}`}>
          <p>{tag}</p>
        </div>
        <div className='research__card__item__description'>
          <h3 className='research__card__item__title'>{title}</h3>
          <div className='view__research__course'>
            <p>View Product</p>
            <ArrowForwardIosRoundedIcon className='arrow__forward__icon' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchCard;

// @icons
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import CloudDownloadRoundedIcon from '@mui/icons-material/CloudDownloadRounded';

// @styling
import './datasetscard.scss';

const DatasetsCard = ({ title, size, tag, img, alt }) => {
  return (
    <div className='datasetscard'>
      <div className='datasetscard__container'>
        <div className='datasetscard__card'>
          <div className='datasetscard__img'>
            <img src={img} alt={alt} />
          </div>

          <div className='datasetscard__details'>
            <div className='datasetscard__heading'>
              <h3>{title}</h3>
            </div>

            <div className='datasetscard__size'>
                <CloudDownloadRoundedIcon className='cloud__icon' />
              <p>{size}</p>
            </div>
            <div className='datasetscard__tag'>
              <LocalOfferRoundedIcon className='tag__icon' />
              <p>{tag}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatasetsCard;

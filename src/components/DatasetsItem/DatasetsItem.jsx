import { useParams } from 'react-router-dom';

// @data
import { datasets } from '../../data/datasetsdata';

// @icons
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import CloudDownloadRoundedIcon from '@mui/icons-material/CloudDownloadRounded';

// @styling
import './datasetsitem.scss';

const DatasetsItem = () => {
  const params = useParams();
  let datasetId = parseInt(params.id);
  let data = datasets.find((dataset) => dataset.id === datasetId);

  return (
    <div className='datasetsitem'>
      <div className='datasetsitem__container'>
        <header className='datasetsitem__hero'>
          <div className='datasetsitem__img'>
            <img src={data.img} alt={data.alt} />
          </div>

          <div className='datasetsitem__text'>
            <h3>{data.title}</h3>
          </div>
        </header>

        <div className='datasetsitem__info'>
          <div className='datasetsitem__tag'>
            <LocalOfferRoundedIcon className='tag__icon' />
            <p>{data.tag}</p> <span />
          </div>
          <div className='datasetsitem__size'>
            <CloudDownloadRoundedIcon className='size__icon' />
            <p>{data.size}</p> <span />
          </div>
          <div className='datasetsitem__type'>
            <p>CSV</p> <span />
          </div>
          <div className='datasetsitem__download__button'>
            <FileDownloadRoundedIcon className='download__icon' />
            <p>Download</p>
          </div>
        </div>

        <div className="datasetsitem__description">
            <div className="datasetsitem__description__container">
                <div className="datasetsitem__description__item">
                    <p>lorem ipsum dolor sit amet, consectetur adipiscing el</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DatasetsItem;

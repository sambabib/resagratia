// @components
import SearchField from '../../../components/SearchField/SearchField';
import DatasetsCard from '../../../components/DatasetsCard/DatasetsCard';

// @data
import { datasetsdata } from '../../../data/datasetsdata';

// @assets
import DatasetsImg from '../../../assets/datasets-hero.jpg';

// @styling
import './datasets.scss';

const Datasets = () => {
  return (
    <div className='datasets'>
      <div className='datasets__hero__container'>
        <div className='datasets__hero'>
          <div className='datasets__hero__text'>
            <div className='datasets__hero__heading'>
              <h3>Datasets</h3>
            </div>
            <div className='datasets__hero__paragraph'>
              <p>
                Discover, Explore and Analyze quality free open data. For data
                science and visualization
              </p>
            </div>
          </div>

          <div className='datasets__hero__img'>
            <img
              src={DatasetsImg}
              alt='Infographic vector created by rawpixel.com - www.freepik.com'
            />
          </div>
        </div>
      </div>

      <div className='datasets__search'>
        <div className='datasets__search__container'>
          <SearchField
            type='password'
            id='search'
            name='search'
            placeholder='Search datasets'
          />
        </div>
      </div>

      <div className='datasets__card'>
        <div className='datasets__card__container'>
          {datasetsdata.map((item) => (
            <DatasetsCard
              title={item.title}
              size={item.size}
              tag={item.tag}
              img={item.img}
              alt={item.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Datasets;

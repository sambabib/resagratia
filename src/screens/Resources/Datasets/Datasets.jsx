import { Outlet } from 'react-router-dom';

// @components
import SearchField from '../../../components/SearchField/SearchField';
import DatasetsCard from '../../../components/DatasetsCard/DatasetsCard';

// @data
import { datasets } from '../../../data/datasetsdata';

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
                Discover, Explore and <br /> Analyze quality free open data. For data
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
            type='text'
            id='searcfield'
            name='searchfield'
            placeholder='Search datasets'
          />
        </div>
      </div>

      <div className='datasets__card'>
        <div className='datasets__card__container__heading'>
          <h3>Popular Datasets</h3>
        </div>
        <div className='datasets__card__container'>
          {datasets.map((item) => (
            <DatasetsCard
              title={item.title}
              size={item.size}
              tag={item.tag}
              img={item.img}
              alt={item.alt}
              key={item.id}
              id={item.id}
            />
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Datasets;

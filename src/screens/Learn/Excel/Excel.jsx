// @assets
import ExcelLogo from '../../../assets/excel.png';

// @styling
import './excel.scss';

const tags = [
  {
    id: 1,
    name: 'tag__courses',
    data: '3 courses',
  },
  {
    id: 2,
    name: 'tag__hours',
    data: '10 hours',
  },
  {
    id: 3,
    name: 'tag__projects',
    data: '5 projects',
  },
  {
    id: 4,
    name: 'tag__resources',
    data: '11 resources',
  },
];

const Excel = () => {
  return (
    <div className='excel'>
      <div className='excel__container'>
        <div className='title__container'>
          <div className='title__description'>
            <div className='title__description__heading'>
              <div className='title__logo'>
                <img src={ExcelLogo} alt='excel logo' />
              </div>
              <div className='title__heading'>
                <h3>Learn Excel</h3>
              </div>
            </div>
            <div className='title__description__paragraph'>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
                ad mollitia molestiae distinctio architecto reiciendis neque
                fuga quis, harum ipsam consequuntur veniam odio dolor, culpa
                aut, sit corporis ullam. Doloribus?
              </p>
            </div>

            {/* title tags */}
            <div className='title__tags'>
              {tags.map((tag) => (
                <div className={tag.name}>
                  <p>{tag.data}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='title__media'>
            <div className='title__media__container'>
              <div className='media__container'>
                <video
                  src='https://youtu.be/ysTcxiyAjYw'
                  controls='controls'
                  autoplay='true'
                ></video>
                <div className='media__getstarted__button'>
                  <p>Get started</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* content */}
        <div className="content__and__tutors">
            <div className="content__container">
                <div className="content__items">
                    <div className="content__left">
                        <div className="circle"></div>
                        <div className="border"></div>
                    </div>
                    <div className="content__right"></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Excel;

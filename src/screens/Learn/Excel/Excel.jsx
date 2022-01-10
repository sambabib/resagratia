// @assets
import ExcelLogo from '../../../assets/excel.png';

// @styling
import './excel.scss';

const tags = [
    {
        id: 1,
        name: "tag__courses",
        data: "3 courses"
    },
    {
        id: 2,
        name: "tag__hours",
        data: "10 hours"
    },
    {
        id: 3,
        name: "tag__projects",
        data: "5 projects"
    },
    {
        id: 4,
        name: "tag__resources",
        data: "11 resources"
    },
]

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
                {tags.map(tag => (
                    <div className={tag.name}>
                        <p>{tag.data}</p>
                    </div>
                ))}
            </div>
          </div>
          <div className='title__media'></div>
        </div>
      </div>
    </div>
  );
};

export default Excel;

// @data
import { overview } from '../../data/library/courseContent';

// @styling
import './index.scss';

const CourseOverview = () => {
  const truncate = (input) =>
    input.length > 500 ? input.substring(0, 450) + '...' : input;

  return (
    <div className='content__overview'>
      {overview.map((item) => (
        <div className='overview__list' key={item.id}>
          <div className='overview__heading'>
            <h2>Course overview</h2>
            <h3>{item.title}</h3>
            <p>{truncate(item.description)}</p>
          </div>
          <div className='overview__details'>
            <h3>Course details</h3>
            <div className='overview__details__list'>
              <ul>
                <li>{item.courses}</li>
                <li>{item.hours}</li>
                <li>{item.projects}</li>
                <li>{item.resources}</li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseOverview;

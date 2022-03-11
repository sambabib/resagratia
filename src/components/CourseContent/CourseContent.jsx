// @components
import CourseContentTitle from '../CourseContentTitle/CourseContentTitle';

// @data
import { overview } from '../../data/library/courseContent';

const CourseContent = () => {
  return (
    <div className='course__content'>
      <div className='course__content__container'>
        {overview.map((item) => (
          <div key={item.id}>
            {item.courseTitle.map((title, index) => (
              <CourseContentTitle key={index} title={title} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseContent;

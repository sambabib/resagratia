import { useState } from 'react';

// @components
import CourseContentLesson from '../CourseContentLesson/CourseContentLesson';

// @icons
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

// @styling
import './index.scss';

const CourseContentTopic = ({ topic }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='course__content__topic'>
      <ul>
        <li onClick={handleToggle}>
          {topic.title}{' '}
          {!isOpen ? (
            <KeyboardArrowDownRoundedIcon className='icon' />
          ) : (
            <KeyboardArrowUpRoundedIcon className='icon' />
          )}
        </li>
      </ul>

      {isOpen && (
        <div className='course__content__topic__item'>
          {topic.courseLesson.map((lesson) => (
            <CourseContentLesson key={lesson.id} lesson={lesson} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseContentTopic;

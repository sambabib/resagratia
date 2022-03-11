import { useState } from 'react';

// @components
import CourseContentTopic from '../CourseContentTopic/CourseContentTopic';

// @icons
import FolderOpenRoundedIcon from '@mui/icons-material/FolderOpenRounded';

// @stying
import './index.scss';

const CourseContentTitle = ({ title }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='coursecontent__topic'>
      <div className='coursecontent__topic__title'>
        <div className='coursecontent__topic__item' onClick={handleToggle}>
          <FolderOpenRoundedIcon className='folder__icon' />
          <h3>{title.title}</h3>
        </div>
        {isOpen && (
          <div className='coursecontent__topic__details'>
            {title.courseTopic.map((topic) => (
              <CourseContentTopic key={topic.id} topic={topic} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseContentTitle;

// @icons
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';

// @styling
import './index.scss';

const CourseContentLesson = ({ lesson }) => {
  return (
    <div className='course__content__lesson'>
     <ul>
         <PlayCircleOutlineRoundedIcon className='play__icon' /> <li>{lesson.title}</li>
     </ul>
    </div>
  );
};

export default CourseContentLesson;

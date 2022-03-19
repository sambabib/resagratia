import { useDispatch } from 'react-redux';
import { updateVideo } from '../../redux/reducers/videoContentSlice';

// @icons
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';

// @styling
import './index.scss';

const CourseContentLesson = ({ lesson }) => {
  const dispatch = useDispatch();

  const handleVideoUpdate = () => {
    dispatch(updateVideo(lesson.content));
  };

  return (
    <div className='course__content__lesson'>
      <ul onClick={handleVideoUpdate}>
        <PlayCircleOutlineRoundedIcon className='play__icon' />{' '}
        <li>{lesson.title}</li>
      </ul>
    </div>
  );
};

export default CourseContentLesson;

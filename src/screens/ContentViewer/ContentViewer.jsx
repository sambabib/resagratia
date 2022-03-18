// @components
import CourseContent from '../../components/CourseContent/CourseContent';
import Tabs from '../../components/Tabs/Tabs';

// @styling
import './index.scss';

const ContentViewer = () => {
  return (
    <div className='contentviewer'>
      <div className='contentviewer__container'>
        <div className='contentviewer__course'>
          <div className='contentviewer__video__player'>
            <video controls autoPlay>
              <source></source>
            </video>
          </div>
          <Tabs />
        </div>
        <div className='contentviewer__overview'>
          <div className='contentviewer__overview__container'>
            <CourseContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentViewer;

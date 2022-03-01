import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

// @@components
import CoursesCard from '../../components/CoursesCard/CoursesCard';

// @icons
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

// @data
import { courses } from '../../data/coursesData';
import { research } from '../../data/researchData';

// @styling
import './index.scss';
import ResearchCard from '../../components/ResearchCard/ResearchCard';

const WelcomeDashboard = () => {
  const [isUserVerified, setIsUserVerified] = useState(true);

  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser.emailVerified === false) {
      setIsUserVerified(false);
    }
  }, [currentUser.emailVerified]);

  return (
    <div className='welcome__dashboard'>
      <div className='welcome__dashboard__container'>
        <div className='welcome__dashboard__header'>
          <h2>Hello, {currentUser?.displayName}</h2>
        </div>

        {!isUserVerified ? (
          <div className='welcome__dashboard__verify'>
            <p>
              We noticed you didn't verify your email address yet. Please verify
              your email address.
            </p>

            <div className='welcome__dashboard__verify__button'>
              <button type='button'>Send verification email</button>
            </div>
          </div>
        ) : null}

        <div className='welcome__dashboard__continue'>
          <div className='welcome__dashboard__continue__container'>
            <h3>Continue</h3>
            <ArrowForwardIosRoundedIcon className='arrow__forward__icon' />
          </div>
          <div className='welcome__dashboard__continue__cards'>
            <div className='welcome__dashboard__continue__card'></div>
          </div>
        </div>
      </div>

      <div className='welcome__dashboard__paths'>
        <div className='welcome__dashboard__paths__heading'>
          <h3>Learning paths</h3>
        </div>
        <div className='welcome__dashboard__paths__container'>
          {courses.map((course) => {
            return (
              <CoursesCard
                key={course.id}
                title={course.title}
                img={course.img}
              />
            );
          })}
        </div>
      </div>

      <div className='welcome__dashboard__research'>
        <div className='welcome__dashboard__research__heading'>
          <h3>Explore dashboards</h3>
        </div>
        <div className='welcome__dashboard__research__container'>
          {research.map((item) => {
            return (
              <ResearchCard
                key={item.id}
                title={item.title}
                img={item.img}
                tag={item.tag}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WelcomeDashboard;

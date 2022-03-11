import { useState } from 'react';

// @components
import TabNavItem from '../TabNavItem/TabNavItem';
import TabContent from '../TabContent/TabContent';
import CourseOverview from '../CourseOverview/CourseOverview';
import Discussions from '../Discussions/Discussions';

// @styling
import './index.scss';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div className='tabs'>
      <ul className='tab__nav'>
        <TabNavItem
          title='Overview'
          id='tab1'
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title='Discussions'
          id='tab2'
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>

      <div className='tab-outlet'>
        <TabContent id='tab1' activeTab={activeTab}>
          <CourseOverview />
        </TabContent>
        <TabContent id='tab2' activeTab={activeTab}>
          <Discussions />
        </TabContent>
      </div>
    </div>
  );
};

export default Tabs;

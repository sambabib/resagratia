import { useState } from 'react';

// @assets
import ExcelLogo from '../../../assets/excel.png';
import Man1 from '../../../assets/man.jpg';
import Man2 from '../../../assets/man2.jpg';
import Man3 from '../../../assets/man3.jpg';
import CU from '../../../assets/cu.png';
import EgbinPower from '../../../assets/egbin-power.png';
import LBS from '../../../assets/lbschool.png';
import MKopa from '../../../assets/m-kopa.png';
import Shell from '../../../assets/shell.png';
import Softcom from '../../../assets/softcom.png';
import TradeDepot from '../../../assets/trade-depot.png';
import UI from '../../../assets/uofibadan.png';

// @icons
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

// @styling
import './excel.scss';

const tags = [
  {
    id: 1,
    name: 'tag__courses',
    data: '3 courses',
  },
  {
    id: 2,
    name: 'tag__hours',
    data: '10 hours',
  },
  {
    id: 3,
    name: 'tag__projects',
    data: '5 projects',
  },
  {
    id: 4,
    name: 'tag__resources',
    data: '11 resources',
  },
];

const content = [
  {
    id: 1,
    title: 'Intoduction to Excel',
    description: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
        ad mollitia molestiae distinctio architecto reiciendis neque
        fuga quis, harum ipsam consequuntur veniam odio dolor, culpa
        aut, sit corporis ullam. Doloribus? istinctio architecto reiciendis neque
        fuga quis, harum ipsam consequuntur veniam odio dolor, culpa
        aut, sit corporis ullam`,
    tags: [
      {
        id: 11,
        data: '1 hour',
      },
      {
        id: 12,
        data: '1 project',
      },
    ],
    circle: 'circle',
    border: 'border',
  },
  {
    id: 2,
    title: 'Business Analysis with Excel',
    description: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
        ad mollitia molestiae distinctio architecto reiciendis neque
        fuga quis, harum ipsam consequuntur veniam odio dolor, culpa
        aut, sit corporis ullam. Doloribus? istinctio architecto reiciendis neque
        fuga quis, harum ipsam consequuntur veniam odio dolor, culpa
        aut, sit corporis ullam`,
    tags: [
      {
        id: 21,
        data: '3 hours',
      },
      {
        id: 22,
        data: '2 projects',
      },
    ],
    circle: 'circle',
    border: 'border',
  },
  {
    id: 3,
    title: 'Advanced Analytics with Excel',
    description: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
        ad mollitia molestiae distinctio architecto reiciendis neque
        fuga quis, harum ipsam consequuntur veniam odio dolor, culpa
        aut, sit corporis ullam. Doloribus?`,
    tags: [
      {
        id: 31,
        data: '6 hours',
      },
      {
        id: 32,
        data: '2 projects',
      },
    ],
    circle: 'circle',
    border: 'border',
  },
];

const tutors = [
  {
    id: 1,
    name: 'Geovanni Ubah',
    job: `Data Analyst at M-Kopa`,
    img: Man1,
  },
  {
    id: 2,
    name: 'Max Favor',
    job: `Business Analyst`,
    img: Man2,
  },
  {
    id: 3,
    name: 'Dennis Ai',
    job: `Auditor`,
    img: Man3,
  },
];

const logos = [
  {
    id: 1,
    img: CU,
  },
  {
    id: 2,
    img: LBS,
  },
  {
    id: 3,
    img: EgbinPower,
  },
  {
    id: 4,
    img: MKopa,
  },
  {
    id: 5,
    img: Shell,
  },
  {
    id: 6,
    img: Softcom,
  },
  {
    id: 7,
    img: TradeDepot,
  },
  {
    id: 8,
    img: UI,
  },
];

const Excel = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleShowExpanded = () => {
    setIsExpanded(!isExpanded);
  };

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
              {tags.map((tag) => (
                <div className={tag.name} key={tag.id}>
                  <p>{tag.data}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='title__media'>
            <div className='title__media__container'>
              <div className='media__container'>
                <video
                  src='https://youtu.be/ysTcxiyAjYw'
                  controls='controls'
                  autoPlay={true}
                ></video>
                <div className='media__getstarted__button'>
                  <p>Get started</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* content */}
        <div className='content__and__tutors'>
          <div className='content__container'>
            <div className='content__items'>
              <div className='content__left'>
                {content.map((item) => (
                  <>
                    <div key={item.circle} className={item.circle}></div>
                    <div key={item.border} className={item.border}></div>
                  </>
                ))}
              </div>
              <div className='content__right'>
                {content.map((item) => (
                  <>
                    <div className='content__right__container' key={item.id}>
                      <div className='content__right__heading'>
                        <h3>{item.title}</h3>
                      </div>
                      <div className='content__right__paragraph'>
                        <p>{item.description}</p>
                      </div>
                      <div className='content__right__tags'>
                        {item.tags.map((tag) => (
                          <p key={tag.id}>{tag.data}</p>
                        ))}
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>

          {/* tutors */}
          <div className='tutors'>
            <div className='tutors__container'>
              <div className='tutor__description__container'>
                {tutors.map((tutor) => (
                  <>
                    <div className='tutor__description' key={tutor.id}>
                      <div className='tutor__img'>
                        <img src={tutor.img} alt={tutor.name} />
                      </div>
                      <div className='tutor__details'>
                        <h3 className='tutor__name'>{tutor.name}</h3>
                        <p className='tutor__job__title'>{tutor.job}</p>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* additional courses in excel */}
        <div className='additional__courses'>
          <div className='additional__courses__container'>
            <div
              className='additional__courses__item'
              onClick={handleShowExpanded}
            >
              {isExpanded ? (
                <KeyboardArrowRightRoundedIcon className='keyboard__right__icon' />
              ) : (
                <KeyboardArrowDownRoundedIcon className='keyboard__down__icon' />
              )}
              <h3 className='additional__courses__heading'>
                Additional Courses in Excel
              </h3>
            </div>
            {!isExpanded && (
              <div className='additional__courses__content'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam nostrum reprehenderit harum tenetur voluptatem
                  perspiciatis suscipit, vel, facere laboriosam autem, maiores
                  eum dolorem dicta iusto fugiat dolor! At, recusandae. Vel!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* organizations */}
        <div className='organizations'>
          <div className='organizations__container'>
            <div className='organizations__heading'>
              <h3>Organizations where some of our students come from</h3>
            </div>
            <div className='organizations__logos__container'>
              {logos.map((logo) => (
                <div className='organizations__logos' key={logo.id}>
                  <img src={logo.img} alt={logo.img} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* carousel */}

        {/* join for free */}
        <div className='join__excel'>
          <div className='join__excel__container'>
            <h3 className='join__excel__heading'>
              Join our learners to gain in-demand skills
            </h3>
            <div className='join__excel__button'>
              <p>Get started</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Excel;

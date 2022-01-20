import { useState } from 'react';
import Carousel from '../../../components/Carousel/Carousel';

// @components
import FaqList from '../../../components/FaqList/FaqList';

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
import Dangote from '../../../assets/dangote.jpg';
import Deloitte from '../../../assets/deloitte.png';

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
    title: 'Introduction to Excel',
    description: `Microsoft Excel is the industry leading spreadsheet program, 
    used by millions of people all over the world. 
    Learning to confidently operate this software will add a highly valuable asset to your employability portfolio. 
    Completing this course will position you ahead of others , 
    and will help you build a strong foundation to develop more advanced skills in later courses 
    and more importantly have some fun along the way…. 
    Let’s get started
    `,
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
    description: `Excel’s ease and flexibility have long made it a tool of choice 
    and also the building block tool in Data analysis. 
    In this module, we will go a step further in understanding the intricacies of Microsoft Excel 
    and its importance in analysing data in the business environment. 
    We shall introduce you to data analysis tools and functions that can be used to automate your workflow.. 
    Sound exciting? Let’s get started..
    `,
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
    description: `In this course, you will learn best practices for how to use data analytics to make any company more competitive 
    and more profitable. 
    What you learn in this course will give you a strong foundation in all the areas that support analytics 
    and will help you to better position yourself for success within your organization. 
    You’ll develop skills and a perspective that will make you more productive, 
    and allow you to become a valuable asset to your organization.`,
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
  {
    id: 9,
    img: Dangote,
  },
  {
    id: 10,
    img: Deloitte,
  },
];

const faqs = [
  {
    id: 1,
    question: `Are the courses online?`,
    answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Quibusdam nostrum reprehenderit harum tenetur voluptatem
    perspiciatis suscipit, vel, facere laboriosam autem, maiores
    eum dolorem dicta iusto fugiat dolor!`,
  },
  {
    id: 2,
    question: `What can I do with Excel?`,
    answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Quibusdam nostrum reprehenderit harum tenetur voluptatem
    perspiciatis suscipit, vel, facere laboriosam autem, maiores
    eum dolorem dicta iusto fugiat dolor!`,
  },
  {
    id: 3,
    question: `What do I need to get started?`,
    answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Quibusdam nostrum reprehenderit harum tenetur voluptatem
    perspiciatis suscipit, vel, facere laboriosam autem, maiores
    eum dolorem dicta iusto fugiat dolor!`,
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
                Gain in demand skills applicable to any industry. Microsoft
                Excel is an ubiquitous tool that is great for data manipulation,
                analysis, and visualization – you can sort, filter, format, and
                chart your data all within one program. As data becomes the
                modern currency, so the ability to analyse the data quickly and
                accurately has become of paramount importance. Learn the
                fundamental principles, gain desirable skills, and key
                techniques with this carefully curated project based curriculum
                that will empower you to stand out in the workplace especially
                at a time when digital skills jobs are growing much faster than
                non-digital jobs.
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
                <video src='' controls='controls' autoPlay={true}></video>
                <div className='media__getstarted__button'>
                  <p>Get started</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* content */}
        <div className='content__and__tutors'>
          <div className='content__and__tutors__container'>
            <div className='content__and__tutors__items'>
              <div className='content__items__container'>
                <div className='content__heading'>
                  <h3>Curriculum Content</h3>
                </div>
                <div className='content__items'>
                  <div className='circle__border__container'>
                    {content.map((item, index) => (
                      <>
                        <div className='circle__and__description' key={item.id}>
                          <div className={item.circle}></div>
                          <div className='content__right__heading'>
                            <h3>{item.title}</h3>
                          </div>
                        </div>

                        <div className='border__and__paragraph' key={index}>
                          <div className={item.border}></div>
                          <div className='content__right__paragraph'>
                            <p>{item.description}</p>
                          </div>
                        </div>

                        <div className='content__right__tags'>
                          {item.tags.map((tag) => (
                            <p key={tag.id}>{tag.data}</p>
                          ))}
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>

              {/* tutors */}
              <div className='tutors'>
                <div className='tutors__container'>
                  <div className='tutors__heading'>
                    <h3>Expert tutors</h3>
                  </div>
                  <div className='tutors__description__container'>
                    {tutors.map((tutor) => (
                      <>
                        <div className='tutor__description' key={tutor.id}>
                          <div className='tutor__img'>
                            <img src={tutor.img} alt={tutor.name} />
                          </div>
                          <div className='tutor__info'>
                            <div className='tutor__name'>
                              <h3>{tutor.name}</h3>
                            </div>
                            <div className='tutor__job__title'>
                              <p>{tutor.job}</p>
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* additional courses in excel */}
        <div className='additional__courses'>
          <div className='additional__courses__container'>
            <div className='additional__courses__heading'>
              <h3>Some additional courses in Excel</h3>
            </div>
            <div
              className='additional__courses__content'
              onClick={handleShowExpanded}
            >
              <div className='additional__courses__item'>
                <h3>Additional courses in Excel</h3>
                {!isExpanded ? (
                  <KeyboardArrowRightRoundedIcon className='keyboard__right__icon' />
                ) : (
                  <KeyboardArrowDownRoundedIcon className='keyboard__down__icon' />
                )}
              </div>
              {isExpanded ? (
                <div className='additional__courses__details'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam nostrum reprehenderit harum tenetur voluptatem
                    perspiciatis suscipit, vel, facere laboriosam autem, maiores
                    eum dolorem dicta iusto fugiat dolor! At, recusandae. Vel!
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* organizations */}
        <div className='organizations'>
          <div className='organizations__container'>
            <h3 className='organizations__heading'>
              Organizations where some of our students come from
            </h3>
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
        <div className='excel__carousel'>
          <div className='excel__carousel__container'>
            <h3 className='excel__carousel__heading'>
              Some of our best reviews
            </h3>
            <h3 className='excel__carousel__subheading'>
              Here are reviews from some of our students
            </h3>
            <div className='excel__imported__carousel'>
              <Carousel />
            </div>
          </div>
        </div>

        {/* join for free */}
        <div className='join__excel'>
          <div className='join__excel__container'>
            <div className='join__excel__heading__container'>
              <h3>Want to skill up?</h3>
              <p>Join our learners to gain in-demand skills</p>
            </div>
            <div className='join__excel__button'>
              <p>Get started</p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className='faq'>
          <div className='faq__container'>
            <div className='faq__items'>
              <h3 className='faq__heading'>FAQs</h3>
              <h3 className='faq__subheading'>Frequently asked questions</h3>
              <ul>
                {faqs.map((faq) => {
                  return (
                    <FaqList question={faq.question} answer={faq.answer} key={faq.id} />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Excel;

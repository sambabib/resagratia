import { useState } from 'react';

// @styling
import './faqlist.scss';

// @icons
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

const FaqList = ({ question, answer }) => {
  const [isFaqExpanded, setIsFaqExpanded] = useState(false);

  const handleFaqExpanded = () => {
    setIsFaqExpanded(!isFaqExpanded);
  };

  return (
    <div className='faqlist'>
      <div className='faqlist__items'>
        <li>
          <div className='faqlist__details'>
            <div className='faqlist__question' onClick={handleFaqExpanded}>
              <h3>{question}</h3>
              {!isFaqExpanded ? (
                <KeyboardArrowRightRoundedIcon className='keyboard__right__icon' />
              ) : (
                <KeyboardArrowDownRoundedIcon className='keyboard__down__icon' />
              )}
            </div>
            {isFaqExpanded ? (
              <div className='faqlist__answer'>
                <p>{answer}</p>
              </div>
            ) : null}
          </div>
        </li>
      </div>
    </div>
  );
};

export default FaqList;

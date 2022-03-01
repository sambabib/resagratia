import { useState } from 'react';

// @icons
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

// @styling
import './index.scss';

const VerificationModal = ({ setShowModal, verifyEmail }) => {
  const [loading, setLoading] = useState(false);

  const handleVerifyLoading = async () => {
    setLoading(true);
    try {
      verifyEmail();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='verification__modal'>
      <div className='verification__modal__container'>
        <div
          className='verification__modal__close'
          onClick={() => setShowModal(false)}
        >
          <CloseRoundedIcon className='close__icon' />
        </div>
        <p>
          Hey! We are so glad you signed up on Resagratia. Please verify your
          email address to continue. <br /> If you do not see it in your "Inbox"
          folder, please check your "Spam" folder.
        </p>

        <p>Didn't get Verification Email?</p>

        <button
          className='verify__email'
          onClick={handleVerifyLoading}
          disabled={loading}
        >
          Resend Verification Email
        </button>
      </div>
    </div>
  );
};

export default VerificationModal;

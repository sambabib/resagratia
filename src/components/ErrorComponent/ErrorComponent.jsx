// @assets
import ErrorImg from '../../assets/30.png';

// @styling
import './errorcomponent.scss';

const ErrorComponent = () => {
  return (
    <div className='errorcomponent'>
      <div className='errorcomponent__container'>
        <div className='errorcomponent__content'>
          <div className='errorcomponent__img'>
            <img src={ErrorImg} alt='error' />
          </div>
          <div className='errorcomponent__heading'>
            <h3>Whoopsies! We made a mess!</h3>
          </div>
          <div className='errorcomponent__paragraph'>
            <p>
              It's not you, it's us. We're not sure where the page you're
              looking for is. Do you want to try again?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorComponent;

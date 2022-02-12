import './additionalsignupinformation.scss';

const genderOptions = [
  {
    id: 1,
    value: 'Male',
    label: 'Male',
  },
  {
    id: 2,
    value: 'Female',
    label: 'Female',
  },
];

const experienceOptions = [
  {
    id: 1,
    value: '1 year',
    label: '1 year',
  },
  {
    id: 2,
    value: '1 - 3 years',
    label: '1 - 3 years',
  },
  {
    id: 3,
    value: 'Over 3 years',
    label: 'Over 3 years',
  },
];

const AdditionalSignupInformation = () => {
  return (
    <div className='additional__signup__information'>
      <div className='additional__signup__container'>
        <div className='additional__signup__description'>
          <h3>
            Hi there! Before we let you in, how about you tell us a little about
            yourself?
          </h3>
        </div>

        <div className='form__container'>
          <form>
            <div className='name__container'>
              <div className='firstname__container'>
                <label htmlFor='firstname'>First name</label>
                <input
                  id='firstname'
                  type='text'
                  name='firstname'
                  autoComplete='off'
                  placeholder={`What's your first name?`}
                />
              </div>

              <div className='lastname__container'>
                <label htmlFor='lastname'>Last name</label>
                <input
                  id='lastname'
                  type='text'
                  name='lastname'
                  autoComplete='off'
                  placeholder={`What's your last name?`}
                />
              </div>
            </div>

            <div className='gender__experience__container'>
              <div className='gender__container'>
                <select>
                  {genderOptions.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>

              <div className="experience__container">
              <select>
                  {experienceOptions.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdditionalSignupInformation;

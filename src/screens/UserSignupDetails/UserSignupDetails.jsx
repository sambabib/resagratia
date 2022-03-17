import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';

import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { db, auth } from '../../firebase/firebase';

import { useAuth } from '../../context/AuthContext';
import { updateProfile } from 'firebase/auth';

// @styling
import './index.scss';
// import Loader from '../../utils/Loader/Loader';

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
  {
    id: 3,
    value: 'Other',
    label: 'Other',
  },
  {
    id: 4,
    value: 'Prefer not to say',
    label: 'Prefer not to say',
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

const UserSignupDetails = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { currentUser } = useAuth();

  const countryOptions = useMemo(() => countryList().getData(), []);

  const defaultValue = (options, value) => {
    return options ? options.find((option) => option.value === value) : '';
  };

  const customStyles = {
    menu: (provided) => ({
      ...provided,
      padding: 10,
      fontSize: 15,
    }),

    control: (provided, state) => ({
      ...provided,
      padding: '8px',
      fontSize: 15,
      border: state.isFocused ? '1px' : null,
    }),
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      gender: '',
      experience: '',
      country: '',
      company: '',
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required('Please enter your first name'),
      lastName: Yup.string().required('Please enter your last name'),
      gender: Yup.string().required('Please select your gender'),
      experience: Yup.string().required(
        'Please select your years of experience'
      ),
      country: Yup.string().required('Please select your country'),
      company: Yup.string().required('Please enter your company or school'),
    }),

    onSubmit: async () => {
      setLoading(true);
      try {
        if (currentUser || currentUser !== null) {
          await addDoc(collection(db, 'users'), {
            email: currentUser.email,
            uid: currentUser.uid,
            firstName: formik.values.firstName,
            lastName: formik.values.lastName,
            gender: formik.values.gender,
            experience: formik.values.experience,
            country: formik.values.country,
            company: formik.values.company,
            joinedAt: Timestamp.now(),
          });

          await updateProfile(auth.currentUser, {
            displayName: formik.values.firstName,
          });

          navigate('/dashboard');
        }
        console.log('display name:', currentUser.displayName);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    },
  });

  useEffect(() => {
    if (currentUser) {
      toast.warn(`Hello, ${currentUser.email}. Please complete the form`)
    } else {
      toast.warn('Please complete the form');
    }
  }, [currentUser]);

  return (
    <div className='additional__signup__information'>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className='react__toast'
      />

      <div className='additional__signup__container'>
        <div className='additional__signup__description'>
          <h3>
            Hi there! Before we let you in, how about you tell us a little about
            yourself?
          </h3>
        </div>

        <div className='form__container'>
          <form onSubmit={formik.handleSubmit}>
            <div className='name__container'>
              <div className='firstname__container'>
                <label htmlFor='firstname' />
                <input
                  id='firstName'
                  type='text'
                  name='firstName'
                  autoComplete='nope'
                  aria-label='first name'
                  placeholder={`What's your first name?`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  className={
                    formik.touched.firstName && formik.errors.firstName
                      ? 'form__error__border'
                      : null
                  }
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className='form__errors'>{formik.errors.firstName}</div>
                ) : null}
              </div>

              <div className='lastname__container'>
                <label htmlFor='lastname' />
                <input
                  id='lastName'
                  type='text'
                  name='lastName'
                  autoComplete='nope'
                  aria-label='last name'
                  placeholder={`What's your last name?`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lasttName}
                  className={
                    formik.touched.lastName && formik.errors.lastName
                      ? 'form__error__border'
                      : null
                  }
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className='form__errors'>{formik.errors.lastName}</div>
                ) : null}
              </div>
            </div>

            <div className='gender__experience__container'>
              <div className='gender__container'>
                <Select
                  styles={customStyles}
                  options={genderOptions}
                  value={defaultValue(genderOptions, formik.values.gender)}
                  onChange={(value) =>
                    formik.setFieldValue('gender', value.value)
                  }
                  placeholder='Select Gender'
                />
                {formik.touched.gender && formik.errors.gender ? (
                  <div className='select__form__errors'>
                    {formik.errors.gender}
                  </div>
                ) : null}
              </div>

              <div className='experience__container'>
                <Select
                  styles={customStyles}
                  options={experienceOptions}
                  value={defaultValue(
                    experienceOptions,
                    formik.values.experience
                  )}
                  onChange={(value) =>
                    formik.setFieldValue('experience', value.value)
                  }
                  placeholder='Select years of Experience'
                />
                {formik.touched.experience && formik.errors.experience ? (
                  <div className='select__form__errors'>
                    {formik.errors.experience}
                  </div>
                ) : null}
              </div>
            </div>

            <div className='country__company__container'>
              <div className='country__container'>
                <Select
                  styles={customStyles}
                  options={countryOptions}
                  value={defaultValue(countryOptions, formik.values.country)}
                  onChange={(value) =>
                    formik.setFieldValue('country', value.value)
                  }
                  placeholder='Select Country'
                />
                {formik.touched.country && formik.errors.country ? (
                  <div className='select__form__errors'>
                    {formik.errors.country}
                  </div>
                ) : null}
              </div>

              <div className='company__container'>
                <label htmlFor='company' />
                <input
                  id='company'
                  type='text'
                  name='company'
                  autoComplete='nope'
                  aria-label='company'
                  placeholder={`What's your company name?`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.company}
                  className={
                    formik.touched.company && formik.errors.company
                      ? 'form__error__border'
                      : null
                  }
                />
                {formik.touched.company && formik.errors.company ? (
                  <div className='form__errors'>{formik.errors.company}</div>
                ) : null}
              </div>
            </div>
            <div className='form__alternate__text'>
              <p>
                <small>*Enter school name if you're a student.</small>
              </p>
            </div>

            <button
              type='submit'
              disabled={loading}
              className={loading ? 'spinner' : null}
            >
              {loading ? 'Loading...' : 'Continue'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserSignupDetails;

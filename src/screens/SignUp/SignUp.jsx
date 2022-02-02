import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// @assets
import FormLogo from '../../assets/logo-white.svg';

// @icons
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

// @styling
import './signup.scss';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
    console.log(showPassword);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is Required'),
      password: Yup.string()
        .required('Please enter a password')
        .matches(
          /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          'Password must contain at least 8 characters, one uppercase, one number and one special case character'
        ),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className='signup'>
      <Link to='/'>
        <div className='back__button'>
          <ArrowBackIosNewRoundedIcon className='back__icon' />
          <HomeRoundedIcon className='home__icon' />
        </div>
      </Link>
      <div className='signup__container'>
        <div className='background__img one'></div>
        <div className='background__img two'></div>
        <div className='form'>
          <div className='form__logo'>
            <img src={FormLogo} alt='resa logo' />
          </div>
          <form className='form__container' onSubmit={formik.handleSubmit}>
            <div className='form__text'>
              <h3 className='form__heading'>Create your free account</h3>
              <p className='form__subheading'>
                Hey, there! Sign up with your email to get started.
              </p>
            </div>
            <label htmlFor='email' />
            <input
              id='email'
              name='email'
              type='email'
              autoComplete='off'
              placeholder='Email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`${
                formik.touched.email && formik.errors.email
                  ? 'form__error__border'
                  : null
              }`}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className='form__errors'>{formik.errors.email}</div>
            ) : null}

            <label htmlFor='password'>
              <input
                id='password'
                name='password'
                type={`${showPassword ? 'text' : 'password'}`}
                autoComplete='off'
                placeholder='Your password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className={`${
                  formik.touched.password && formik.errors.password
                    ? 'form__error__border'
                    : null
                }`}
              />
              {!showPassword ? (
                <VisibilityRoundedIcon
                  className='visibility__icon'
                  onClick={handleShowPassword}
                />
              ) : (
                <VisibilityOffRoundedIcon
                  className='visibility__icon'
                  onClick={handleShowPassword}
                />
              )}
            </label>

            {formik.touched.password && formik.errors.password ? (
              <div className='form__errors'>{formik.errors.password}</div>
            ) : null}

            <div className='form__hints'>
              <div className='form__hints__details'>
                <ErrorRoundedIcon className='info__icon' />
                <p>Password must contain at least 8 characters.</p>
              </div>

              <div className='form__hints__details'>
                <ErrorRoundedIcon className='info__icon' />
                <p>
                  Password must contain at least one uppercase, one number and
                  one special case character.
                </p>
              </div>
            </div>

            <button
              type='submit'
              disabled={
                !formik.touched.password ||
                !formik.touched.email ||
                formik.errors.password ||
                formik.errors.email
              }
            >
              Get Started
            </button>
          </form>

          <div className='form__existing__account'>
            <p>
              Already have an account?{' '}
              <Link to='/signin'>
                <span>click here</span>
              </Link>{' '}
              to Sign in.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

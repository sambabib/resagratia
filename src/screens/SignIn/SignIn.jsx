import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import * as Yup from 'yup';

// @assets
import FormLogo from '../../assets/logo.svg';

// @icons
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';

// @styling
import './signin.scss';

const SignIn = () => {
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
        .required('Please enter your password')
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
    <motion.div className='signin'>
      <div className='signin__container'>
        <div className='background__img one'></div>
        <div className='background__img two'></div>
        <div className='form'>
          <div className='form__logo'>
            <img src={FormLogo} alt='resa logo' />
          </div>
          <form className='form__container' onSubmit={formik.handleSubmit}>
            <h3 className='form__heading'>Welcome back!</h3>
            <label htmlFor='email' />
            <input
              id='email'
              name='email'
              type='email'
              autoComplete='off'
              placeholder='Email address'
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
                placeholder='Password'
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

            {/* Forgot password */}
            <div className='form__forgot__password'>
              <p>Forgot password?</p>
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
              Sign in
            </button>
          </form>

          <div className='form__new__account'>
            <p>
              Don't have an account?{' '}
              <Link to='/signup'>
                <span>click here</span>
              </Link>{' '}
              to create a free account.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SignIn;

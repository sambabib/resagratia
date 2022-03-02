import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useAuth } from '../../context/AuthContext';

// @assets
import FormLogo from '../../assets/logo.svg';

// @icons
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

import Loader from '../../utils/Loader/Loader';

// @styling
import './signin.scss';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { login } = useAuth();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
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

    onSubmit: async () => {
      try {
        setLoading(true);
        await login(formik.values.email, formik.values.password);
        navigate('/dashboard');
      } catch (err) {
        if (err.code === 'auth/wrong-password') {
          toast.error('Please check the password');
        }
        if (err.code === 'auth/user-not-found') {
          toast.error('Please check the email');
        }
        if (err.code === 'auth/network-request-failed') {
          toast.error('Please check your network connection then try again');
        }
        setLoading(false);
      }
      setLoading(false);
    },
  });

  return (
    <motion.div className='signin'>
      <Link to='/'>
        <div className='back__button'>
          <ArrowBackIosNewRoundedIcon className='back__icon' />
          <HomeRoundedIcon className='home__icon' />
        </div>
      </Link>
      <div className='signin__container'>
        <div className='background__img one'></div>
        <div className='background__img two'></div>
        <div className='form'>
          <div className='form__logo'>
            <img src={FormLogo} alt='resa logo' />
          </div>
          <form className='form__container' onSubmit={formik.handleSubmit}>
            <div className='form__text'>
              <h3 className='form__heading'>Sign in</h3>
              <p className='form__subheading'>
                Enter your email and password to continue.
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

            {/* Forgot password */}
            <div className='form__forgot__password'>
              <p>Forgot password?</p>
            </div>

            <button
              type='submit'
              disabled={
                !formik.touched.email ||
                formik.errors.password ||
                formik.errors.email ||
                loading
              }
            >
              {loading ? 'Signing In' : 'Sign In'}
            </button>
          </form>

          {loading ? <Loader /> : null}

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

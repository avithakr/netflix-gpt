import { useState, useRef } from 'react';
import Header from './Header';
import { checkValidateData } from './../utils/validate';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/store';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setError('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = !isSignInForm ? nameRef.current.value : null;

    const message = checkValidateData(email, password, name);
    setError(message);

    if (message) return;

    // sign in/Sign up

    if (!isSignInForm) {
      // sign up logic

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // Update User
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL:
              'https://lh3.googleusercontent.com/a/ACg8ocITHemo-EoSSedE6wOK19ZvnqsLrqZXx8hP6W4evSgy4XkjetVN=s96-c',
          })
            .then(() => {
              // Profile updated!
              // ...

              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));

              navigate('/browse');
            })
            .catch((error) => {
              // An error occurred
              setError(error);
            });
          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + ' ' + errorMessage);
          console.log(errorCode);
          console.log(errorMessage);
        });
    } else {
      // sign in logic

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate('/browse');
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + ' ' + errorMessage);
        });
    }
  };
  return (
    <div className="relative h-screen w-full text-white">
      <img
        src="/neflixloginbg.jpg"
        alt="background"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <Header />
      <div className="relative flex flex-col h-full justify-center items-center z-10">
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg w-80 p-6 rounded-md">
          <h1 className="text-3xl mb-6">
            {!isSignInForm ? 'Sign Up' : 'Sign In'}
          </h1>
          <form className="flex flex-col" onSubmit={handleFormSubmit}>
            {!isSignInForm && (
              <div>
                <input
                  type="text"
                  className="mb-4 py-2 px-4 w-full rounded bg-gray-700 bg-opacity-50 text-white placeholder-gray-300 focus:bg-opacity-100 focus:outline-none"
                  placeholder="Name"
                  ref={nameRef}
                />
              </div>
            )}
            <div className="mb-4">
              <input
                type="email"
                className=" py-2 px-4 w-full rounded bg-gray-700 bg-opacity-50 text-white placeholder-gray-300 focus:bg-opacity-100 focus:outline-none"
                placeholder="Email or Mobile No"
                ref={emailRef}
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                className="py-2 px-4 w-full rounded bg-gray-700 bg-opacity-50 text-white placeholder-gray-300 focus:bg-opacity-100 focus:outline-none"
                placeholder="Password"
                ref={passwordRef}
              />
            </div>
            <p className="text-xs py-2 text-red-500">{error}</p>
            <button className="bg-red-600 hover:bg-red-700 w-full py-2 rounded transition duration-200">
              {!isSignInForm ? 'Sign Up' : 'Sign In'}
            </button>
          </form>
          <p className="py-4 text-center">
            <a
              href="#"
              className="hover:underline hover:underline-offset-4 pl-2"
              onClick={toggleSignInForm}
            >
              {isSignInForm
                ? 'New to Netflix? Sign Up'
                : 'Already registered? Sign In'}{' '}
              Now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

import { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
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
          <form className="flex flex-col">
            {!isSignInForm && (
              <input
                type="text"
                className="mb-4 py-2 px-4 w-full rounded bg-gray-700 bg-opacity-50 text-white placeholder-gray-300 focus:bg-opacity-100 focus:outline-none"
                placeholder="Name"
              />
            )}
            <input
              type="text"
              className="mb-4 py-2 px-4 w-full rounded bg-gray-700 bg-opacity-50 text-white placeholder-gray-300 focus:bg-opacity-100 focus:outline-none"
              placeholder="Email or Mobile No"
            />
            <input
              type="password"
              className="mb-4 py-2 px-4 w-full rounded bg-gray-700 bg-opacity-50 text-white placeholder-gray-300 focus:bg-opacity-100 focus:outline-none"
              placeholder="Password"
            />
            <button className="bg-red-600 hover:bg-red-700 w-full py-2 rounded transition duration-200">
              {!isSignInForm ? 'Sign Up' : 'Sign In'}
            </button>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

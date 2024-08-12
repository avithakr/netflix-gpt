import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  addUser,
  removeUser,
  setLanguage,
  toggleGptSearchView,
} from '../utils/store';
import { LOGO } from '../utils/constants';
import ErrorPage from '../pages/ErrorPage';
import { SUPPORTED_LANGUAGES } from './../utils/constants';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((store) => store.user);
  const { showGptSearch } = useSelector((store) => store.gpt);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        return <ErrorPage error={error} />;
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleSelectChange = (e) => {
    dispatch(setLanguage(e.target.value));
  };

  return (
    <div className="absolute px-2 z-50 w-full text-white bg-black bg-opacity-50">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <img className="w-44" src={LOGO} alt="netflix logo" />
        </div>
        <div className="sm:py-4">
          {userInfo && (
            <div className="flex items-center">
              {showGptSearch && (
                <select
                  className="px-2 py-1 mr-2 rounded border bg-gray-700"
                  onChange={handleSelectChange}
                >
                  {SUPPORTED_LANGUAGES.map(({ identifier, name }) => {
                    return (
                      <option key={identifier} value={identifier}>
                        {name}
                      </option>
                    );
                  })}
                </select>
              )}
              <button
                className="px-2 py-1 bg-purple-800 mr-2 rounded text-white w-28"
                onClick={handleGptSearchClick}
              >
                {showGptSearch ? 'Homepage' : 'GPT Search'}
              </button>
              <div className="w-10 border-2">
                <img
                  src={'./public/userIcon.png'}
                  alt="user-icon"
                  className="w-10"
                />
              </div>
              <button className="px-2 ml-2" onClick={handleSignOut}>
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/store';
import { LOGO } from '../utils/constants';
import ErrorPage from '../pages/ErrorPage';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        return <ErrorPage error={error} />;
      });
  };

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

  return (
    <div className="fixed top-0 left-0 right-0 z-50 text-white px-2 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 opacity-75">
      <div className="flex justify-between items-center">
        <img className="w-44" src={LOGO} alt="netflix logo" />
        {userInfo && (
          <div className="flex items-center">
            <div className="w-10 border-2">
              <img
                src={
                  userInfo.photoURL
                    ? userInfo.photoURL
                    : './public/userIcon.png'
                }
                alt="user-icon"
                className="w-10"
              />
            </div>
            <button className="px-2 ml-2 text-white" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

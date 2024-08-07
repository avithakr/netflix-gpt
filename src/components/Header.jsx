import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();

  const userInfo = useSelector((store) => store.user);
  console.log(userInfo);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        return <ErrorPage error={error} />;
      });
  };
  return (
    <div className="fixed top-0 left-0 right-0 z-50 text-white p-4">
      <div className="flex justify-between items-center">
        <img
          className="w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix logo"
        />
        {userInfo && (
          <div className="flex text-gray-700 items-center">
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
            <button className="px-2 ml-2" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

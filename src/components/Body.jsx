import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/browse',
      element: <Browse />,
    },
  ]);

  return (
    <RouterProvider router={appRouter}>
      <div>body</div>;
    </RouterProvider>
  );
};

export default Body;

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PATH } from './route';
import HomePage from '../pages/homePage/HomePage';
import PlaylistPage from '../pages/playlistPage/PlaylistPage';
import CategoryPage from '../pages/categoryPage/CategoryPage';
import Mypage from '../pages/mypage/Mypage';
import Layout from '../layouts/Layout';

export const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <Layout />,
    children: [
      {
        path: PATH.HOME,
        element: <HomePage />,
      },
      {
        path: PATH.PLAYLIST,
        element: <PlaylistPage />,
      },
      {
        path: PATH.CATEGORY,
        element: <CategoryPage />,
      },
      {
        path: PATH.MYPAGE,
        element: <Mypage />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;

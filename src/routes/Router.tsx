import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PokeInfo, PokeList } from '../components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PokeList />
  },
  {
    path: '/:name',
    element: <PokeInfo />
  }
]);

export const Router = () => {
  return ( 
    <RouterProvider 
      router={router}
    />
  )
};

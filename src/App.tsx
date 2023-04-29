import { FunctionComponent } from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import './global.scss';
import MainContainer from './features/main/Container';

const App: FunctionComponent = () => {
  return <MainContainer />;
};

const router = createHashRouter([
  { path: '/', element: <App /> },
  // { path: '/detail/:id', element: <DetailContainer /> },
]);

const root = createRoot(document.getElementById('app') as Element);
root.render(<RouterProvider router={router} />);

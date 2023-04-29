import { FunctionComponent } from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import './global.scss';

const App: FunctionComponent = () => {
  return <div>hi</div>;
};

const router = createHashRouter([
  { path: '/', element: <App /> },
  // { path: '/detail/:id', element: <DetailContainer /> },
]);

const root = createRoot(document.getElementById('app') as Element);
root.render(<RouterProvider router={router} />);

import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'

import App from './App';
import Error from './pages/Error';
import Contact from './pages/Contact';
import AboutMe from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

import './styles/main.scss'; // Import the main SCSS file
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <AboutMe/>,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
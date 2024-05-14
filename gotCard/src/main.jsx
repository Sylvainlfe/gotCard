
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Family from './pages/Family.jsx';
import Continents from './pages/Continents.jsx';
import Home from './pages/Home.jsx';
import Characters from './pages/Characters.jsx';



const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/characters",
        element: <Characters />,
      },
      {
        path:"/family",
        element: <Family />,
        loader: () => fetch("https://thronesapi.com/api/v2/Characters")
        .then((response) => response.json())
        .then((data) => data)
        .catch((err) => console.error(err))
      },
      {
        path: "/continents",
        element: <Continents />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

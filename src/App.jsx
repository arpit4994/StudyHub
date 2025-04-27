import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Udaan from './components/Udaan';
import Maths from './components/subjects/Maths';
import Hindi from './components/subjects/Hindi';
import Physics from './components/subjects/Physics';
import Chemistry from './components/subjects/Chemistry';
import Biology from './components/subjects/Biology';
import History from './components/subjects/History';
import Geography from './components/subjects/Geography';
import Civics from './components/subjects/Civics';
import Hindigr from './components/subjects/Hindigr';
import English from './components/subjects/English';
import Economics from './components/subjects/Economics';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const routes = [
    { path: "/", element: <Home /> },
    { path: "/udaan", element: <Udaan /> },
    { path: "/udaan/maths", element: <Maths /> },
    { path: "/udaan/physics", element: <Physics /> },
    { path: "/udaan/chemistry", element: <Chemistry /> },
    { path: "/udaan/biology", element: <Biology /> },
    { path: "/udaan/history", element: <History /> },
    { path: "/udaan/geography", element: <Geography /> },
    { path: "/udaan/civics", element: <Civics /> },
    { path: "/udaan/economics", element: <Economics /> },
    { path: "/udaan/hindi", element: <Hindi /> },
    { path: "/udaan/hindigr", element: <Hindigr /> },
    { path: "/udaan/english", element: <English /> },
  ];

  // Redirect to '/udaan/maths' if the current URL is '/udaan'
  useEffect(() => {
    if (location.pathname === '/udaan') {
      navigate('/udaan/maths');
    }
  }, [location.pathname, navigate]);
  useEffect(() => {
    if (location.pathname === '/udaan/') {
      navigate('/udaan/maths');
    }
  }, [location.pathname, navigate]);

  return (
    <div className="w-screen h-screen bg-[#09090b]">
      <Routes>
        {routes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={
              <div>
                <Navbar />
                {path === "/" ? element : <div><Udaan />{element}</div>}
              </div>
            }
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;

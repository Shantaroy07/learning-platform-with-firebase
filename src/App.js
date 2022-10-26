import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Route';
import ReactTooltip from 'react-tooltip';



function App() {


  return (
    <div className='app'>
      <RouterProvider router={router}></RouterProvider>
      <ReactTooltip></ReactTooltip>
    </div>
  );
}

export default App;

import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Route/Route';

function App() {
  return (
    <div>
      <RouterProvider router={router}>
        <Toaster></Toaster>
      </RouterProvider>
    </div>
  );
}

export default App;

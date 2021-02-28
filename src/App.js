import './App.css';
import { ToastProvider } from 'react-toast-notifications';
import Home from './pages/home';


function App() {
  return (
    <ToastProvider
      placement="bottom-right"
      autoDismiss
      autoDismissTimeout={4000}
    >
      <Home/>
    </ToastProvider>
  );
}

export default App;

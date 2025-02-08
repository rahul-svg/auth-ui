import { RouterProvider } from "react-router-dom";
import './App.css'
import {router} from './routes/routes'
import Toast from "./component/Notifications/toast";

const  App = () => {

  return (
    <>
    <Toast/>
    <RouterProvider router={router} />;
    </>
  )
}

export default App

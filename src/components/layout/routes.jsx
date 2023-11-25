import { createBrowserRouter} from "react-router-dom";
import Layout from "./Layout.jsx";
import Catigores from "../web/catigores/Catigores.jsx";
import HomeDashboard from '../dashbord/home/Home.jsx';
import Catigdashboard from '../dashbord/catigores/Catigores.jsx';
import Dashboardlayout from './Dashboardlayout.jsx';
import Home from "../web/home/Home.jsx";
import Register from "../web/register/Register.jsx";
export const router = createBrowserRouter([
  
    {
      path:"/",
      element: <Layout/>,
      children:[
        {
          path:"register",
          element:<Register/>

        },
      
    {
      path:"home",
      element:<Home/>
    },
    {
      path:"categ",
      element:<Catigores/>
    },
    {
      path:"*",
      element:<h2> eroore in page 404</h2>
    }
  
  
  
      ]
    },
    {
      path:'/dashboard',
      element:<Dashboardlayout/>,
      children:[
        {
          path:'home',
          element:<HomeDashboard/>
        },
        {
          path:'catigores',
          element:<Catigdashboard/>
        },
        {
          path:"*",
          element:<h2> eroore in page dashboard 404</h2>
        }
      ]
  
    }
  ]);
  
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Review from "../../pages/Review/Review/Review";
import About from "../../pages/About/About/About";
import Contact from "../../pages/Contact/Contact/Contact";
import Services from "../../pages/Services/Services/Services";
import SignUp from "../../pages/SignUp/SignUp";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path:'/reviews',
                element:<Review></Review>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path: '/dashboard',
                element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>
            }
        ]
    }
])

export default router;
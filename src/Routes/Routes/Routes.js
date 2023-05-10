import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Review from "../../pages/Review/Review/Review";
import About from "../../pages/About/About/About";


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
                path:'/reviews',
                element:<Review></Review>
            },
            {
                path:'/about',
                element:<About></About>
            }
        ]
    }
])

export default router;
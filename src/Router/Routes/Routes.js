import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Addservice from "../../Pages/Addservice/Addservice";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Home/Home/Login/Login";
import Regiser from "../../Pages/Home/Home/Register/Regiser";
import Addreview from "../../Pages/Reviews/Addreview";
import Servesesdetails from "../../Pages/Servesesdetails/Servesesdetails";
import Services from "../../Pages/Services/Services";
import Pryvetrout from "./PryvateRoute/Pryvetrout";


const router = createBrowserRouter([
    {
path:'/',
element:<Main></Main>,
children:[{
    path:'/',
    loader:()=>fetch('http://localhost:5000/food'),
    element:<Home></Home>
},
{
    path:'/services',
    loader:()=>fetch('http://localhost:5000/food/services'),
    element:<Services></Services>
},

{
    path:'/services/:id',
    loader:({ params })=>fetch(`http://localhost:5000/food/services/${params.id}`),
    element:<Servesesdetails></Servesesdetails>
},
{
    path:'/login',
    element: <Login></Login>
},
{
    path:'/register',
    element: <Regiser></Regiser>
},
{
    path:'/Myreviews',
    element:<Pryvetrout><Addreview></Addreview></Pryvetrout>
},{
    path:'/Addservice',
    element:<Pryvetrout><Addservice></Addservice></Pryvetrout>
},
{
    path:'/blog',
    element:<Blog></Blog>
}



]}
])

export default router;
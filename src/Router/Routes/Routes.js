import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Services/Services";

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
}




]}
])

export default router;
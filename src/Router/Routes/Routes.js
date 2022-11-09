import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Servesesdetails from "../../Pages/Servesesdetails/Servesesdetails";
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
},

{
    path:'/services/:id',
    loader:({ params })=>fetch(`http://localhost:5000/food/services/${params.id}`),
    element:<Servesesdetails></Servesesdetails>
}



]}
])

export default router;

import { Button } from 'flowbite-react';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Slider from '../Slider/Slider';


const Home = () => {
    const foods = useLoaderData();
    
    return (
        <div>



            <Slider>

            </Slider>
            <h1>{foods.map(a => <p key={a._id}>{a.name}</p>)}</h1>
            <div >
            <Button className=' place-items-end'>
                
            <Link to={'/services'} className="nav-link active" aria-current="page" >Courses</Link>
    </Button>
            </div>


        </div>
    );
};

export default Home;

import { Button, Card } from 'flowbite-react';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import Slider from '../Slider/Slider';
import './home.css'


const Home = () => {
    const foods = useLoaderData();
    useTitle('Home')
    console.log(foods)

    return (
        <div>



            <Slider>

            </Slider>

            <div className='gri'>
                {
                    foods.map(b => <div className="max-w-sm">
                        <Card  >
                            <img className='hei' src={b.img} alt="" />
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {b.name}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                {b.details.length > 100 ? <>{b.details.slice(0, 400)}<span>... </span> </> : <></>}
                            </p>
                        </Card>
                    </div>)
                }

            </div>


            <Button className=' bt place-items-end'>

                <Link to={'/services'} className="nav-link active" aria-current="page" >SEE ALL</Link>
            </Button>


            <div className="max-w-sm">

            </div>





           

        </div>
    );
};

export default Home;
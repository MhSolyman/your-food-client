
import { Button, Card } from 'flowbite-react';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import Slider from '../Slider/Slider';
import './home.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';


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
                            <PhotoProvider>
                                <PhotoView src={b.img}>
                                    <img className='hei' src={b.img} alt="" />
                                </PhotoView>
                            </PhotoProvider>

                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {b.name}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                            {b.details.length > 100 ? <>{b.details.slice(0, 400)}<span>... </span>
                                
                                <p> <b>Prize :</b><span>{b.tk} tk</span> <span><b>Time:</b> {b.time} min</span> </p>
                                    <Button> <Link to={`/services/${b._id}`} className="nav-link active" aria-current="page" >View details</Link></Button> </> 
                                    : <p> <Button> <Link to={`/services/${b._id}`} className="nav-link active" aria-current="page" >Courses</Link></Button></p>}
                                
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


            <section>
                <div>
                    <div className='c' >
                        <b>Welcome to my food.</b>
                    </div>
                    <p >You can safely order any food from us at home.It is very dangerous to go outside during. <br />
                        this corona .Every day thousands of people are dying due to this virus <br />
                        Experts are banning going out of the house. <br />
                        So stay home stay safe order food from us and stay healthy</p>
                </div>


            </section>


            <section className='se'>
                <div className='qus'>
                    <b>Why should you buy food from me?</b>
                </div>
                <div>
                    <p>
                        I prepare meals in a healthy way. <br />
                        And I have a cow farm from which I produce Hundet percent organic feed <br />
                        And I will not charge any food delivery fee from you <br />
                        
And the food will be of Handet Persen quality</p>
                </div>
            </section>





        </div>
    );
};

export default Home;
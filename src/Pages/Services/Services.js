import { Button, Card } from 'flowbite-react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './ser.css'
import useTitle from '../../hooks/useTitle';

const Services = () => {
    const foods = useLoaderData();
    
    useTitle('Servise')

    return (
        <div >


            <div className='gri'>
                {foods.map(a => <div className='' key={a._id}>

                    <div className="max-w-sm">
                        <Card

                        >
                            <PhotoProvider>
                                <PhotoView src={a.img}>
                                    <img className='hei' src={a.img} alt="" />
                                </PhotoView>
                            </PhotoProvider>

                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {a.name}
                            </h5>

                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                {a.details.length > 100 ? <>{a.details.slice(0, 400)}<span>... </span>
                                
                            <p> <b>Prize :</b><span>{a.tk} tk</span> <span><b>Time:</b> {a.time} min</span> </p>
                                <Button> <Link to={`/services/${a._id}`} className="nav-link active" aria-current="page" >View details</Link></Button> </> 
                                : <p> <Button> <Link to={`/services/${a._id}`} className="nav-link active" aria-current="page" >Courses</Link></Button></p>}
                            </p>
                        </Card>
                    </div>



                </div>

                )}
            </div>





            <div className="grid grid-cols-4 gap-4">

            </div>

        </div>
    );
};

export default Services;
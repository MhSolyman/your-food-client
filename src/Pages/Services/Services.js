import { Button, Card } from 'flowbite-react';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Services = () => {
    const foods = useLoaderData()
    console.log(foods)
    return (
        <div >

            {foods.map(a => <div key={a._id}>

                <div className="max-w-sm">
                    <Card
                        className='h-24'
                        imgSrc={a.img}
                    >

                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {a.name}
                        </h5>
                        
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            {a.details.length > 100 ? <>{a.details.slice(0, 400)}<span>... <Button> <Link to={`/services/${a._id}`} className="nav-link active" aria-current="page" >Courses</Link></Button></span> </> : <p> bbbb</p>}
                        </p>
                    </Card>
                </div>



            </div>

            )}





            <div className="grid grid-cols-4 gap-4">

            </div>

        </div>
    );
};

export default Services;
import { Card } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Services = () => {
    const foods= useLoaderData()
    console.log(foods)
    return (
        <div className='flex'>
          
            {foods.map(a => <div key={a._id}>

                <div className="max-w-sm">
  <Card
    className='h-24'
    imgSrc={a.img} 
  >
    <img className='h-1/4' src={a.img} alt="" />
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Noteworthy technology acquisitions 2021
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  </Card>
</div>



            </div>
           
            )}
            
        </div>
    );
};

export default Services;
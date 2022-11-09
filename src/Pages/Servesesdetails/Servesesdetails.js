import { Card } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Servesesdetails = () => {
    const foodOne= useLoaderData()
    console.log(foodOne)
    return (
        <div>
            
            <div className="max-w-sm">
  <Card
    
    imgSrc={foodOne.img}
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {foodOne.name}
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      {foodOne.details}
    </p>
    <p> <b>Prize :</b><span>{foodOne.tk} tk</span> <span><b>Time:</b> {foodOne.time} min</span> </p>
  </Card>
</div>
        </div>
    );
};

export default Servesesdetails;
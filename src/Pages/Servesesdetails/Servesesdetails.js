import { Button, Card, Checkbox, Label, Table, TextInput } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import Reviws from '../Reviews/Reviws';


const Servesesdetails = () => {
    const { user } = useContext(AuthContext);

    const { _id, tk, name, img, details, time } = useLoaderData()
   
    const [rev, setRev] = useState([])
   

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?service=${_id}`)
            .then(res => res.json())
            .then(data => setRev(data))
    }, [_id])
   


    const handleReviews = (event) => {
        event.preventDefault();
        const form = event.target;
        const reviews = form.name.value;


        const order = {
            service: _id,
            serviceName: name,
            email: user?.email,
            coustomerNamw: user?.displayName,
            photo: user?.photoURL,
            price: tk,
            customerId: user?.uid,
            reviews,


        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(er => console.error(er))



    }

    return (
        <div>

            <div className="max-w-sm">
                <Card

                    imgSrc={img}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {name}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {details}
                    </p>
                    <p> <b>Prize :</b><span>{tk} tk</span> <span><b>Time:</b> {time} min</span> </p>
                </Card>
            </div>












            <Table>
                <Table.Head>
                    <Table.HeadCell>
                        User photo
                    </Table.HeadCell>
                    <Table.HeadCell>
                    Reviews
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Email
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Product
                    </Table.HeadCell>
                    <Table.HeadCell>
                        prize
                    </Table.HeadCell>
                    <Table.HeadCell>
                     user name   
                    </Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">
                            Edit
                        </span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    
                        {rev.map(re => <Reviws key={re._id}
                            re={re}
                        >

                        </Reviws>)}
                    
                </Table.Body>
            </Table>












            {
                user?.uid ? <><form onSubmit={handleReviews} className="flex flex-col gap-4">


                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="large"
                                value="Review"
                            />
                        </div>
                        <TextInput
                            id="large"
                            type="text"
                            name='name'
                            sizing="lg"
                        />

                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">
                            Remember me
                        </Label>
                    </div>
                    <Button type="submit">
                        Submit
                    </Button>
                </form></> : <><p>
                    Please login to add a review <Link to={'/login'}>

                        <Button>
                            Log In
                        </Button>

                    </Link> </p></>
            }



        </div>
    );
};

export default Servesesdetails;
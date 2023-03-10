import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React from 'react';
import swal from 'sweetalert';

import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../hooks/useTitle';
import { useNavigate } from 'react-router-dom';

const Addservice = () => {
    const navigate = useNavigate()

useTitle('Add Serice')

    const handleReviews = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const img = form.img.value;
        const details = form.details.value;
        const tk = form.tk.value;
        const time = form.time.value;
        


        const order = {
            name,
            img,
            details,
            tk,
            time,


        }

        fetch('https://your-food-server.vercel.app/food/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data =>{ swal("Good job!", "Add Service!", "success")
        navigate('/')})
            
            
            .catch(er => console.error(er))



    }
    return (
        <div>
            add service

            <form onSubmit={handleReviews} className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="name"
                            value="Product Name"
                        />
                    </div>
                    <TextInput
                        id="name"
                        type="text"
                        name='name'
                        
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="img"
                            value="img url"
                        />
                    </div>
                    <TextInput
                        id="img"
                        type="text"
                        name='img'
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="details"
                            value="details"
                        />
                    </div>
                    <TextInput
                        id="details"
                        type="text"
                        name='details'
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="tk"
                            value="tk"
                        />
                    </div>
                    <TextInput
                        id="tk"
                        type="text"
                        name='tk'
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="time"
                            value="time"
                        />
                    </div>
                    <TextInput
                        id="time"
                        type="text"
                        name='time'
                        required={true}
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
            </form>
        </div>
    );
};

export default Addservice;
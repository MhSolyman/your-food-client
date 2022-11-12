import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import swal from 'sweetalert'
import useTitle from '../../hooks/useTitle';

const Update = () => {
    useTitle('Re Update')
    const reve = useLoaderData()
    const { _id } = reve;
    console.log(_id)






    const editeRevews = (event) => {
        event.preventDefault();
        const form = event.target;
        const reviews = form.name.value;

        const order = {
            reviews
        }
        fetch(`http://localhost:5000/editerev/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body:JSON.stringify(order)

        })
            .then(data=>{console.log(data)
                form.reset()
                swal("Good job!", "You edite review!", "success");})
            .catch(er=>console.log(er))

    }
    return (
        <div>


            Update Route
            <form onSubmit={editeRevews} className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="reviews"
                            value="EDITE REVIEW"
                        />
                    </div>
                    <TextInput
                        id="reviews"
                        type="text"
                        placeholder="REVIEW"
                        name='name'
                        required={true}
                    />

                </div>
                <Button type="submit">
                    Submit
                </Button>
            </form>

        </div>
    );
};

export default Update;
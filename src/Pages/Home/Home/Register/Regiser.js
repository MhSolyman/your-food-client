import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/UserContext';
import useTitle from '../../../../hooks/useTitle';
import { GoogleAuthProvider } from 'firebase/auth';

const Regiser = () => {
    useTitle('Register')
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const { createUser, updateUserProfile, providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();




    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });

            })
            .catch(error => console.error(error))
    }


    const navigate = useNavigate();
    const handleSubmit = (event) => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(password, email)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()

                handleUpdateUserProfile(name, photoURL)
                form.reset()

                navigate(from, { replace: true });
            })
            .catch(e => console.log(e))



    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {

            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch((error) => { console.error(error) })
    }
    return (
        <div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">


                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="name"
                            value="name"
                        />
                    </div>
                    <TextInput
                        id="name"
                        type="text"
                        name='name'

                        placeholder="name"
                        required={true}
                    />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="photoURL"
                            value="PhotoURL"
                        />
                    </div>
                    <TextInput
                        id="photoURL"
                        type="text"
                        name='photoURL'

                        placeholder="Photo url"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        type="email"
                        name='email'
                        placeholder="name@flowbite.com"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        name='password'
                        type="password"

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
            <div>

                <Button className='my-1' onClick={handleGoogleSignIn}>
                    <i className="text-9xl mx-1 fa-brands fa-google"></i>
                    Google Register
                </Button>
            </div>

        </div>
    );
};

export default Regiser;
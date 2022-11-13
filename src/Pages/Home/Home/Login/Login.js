import { GoogleAuthProvider } from 'firebase/auth';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/UserContext';
import useTitle from '../../../../hooks/useTitle';

const Login = () => {

    const [error, setError] = useState('');
    useTitle('LogIn')
    const navigate = useNavigate();
    const location = useLocation();
    let from = location?.state?.from?.pathname || "/services";

    const { providerLogin, signIn } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                const cruser = {
                    email: user.email
                }
                fetch('https://your-food-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(cruser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('token-set', data.token)
                        navigate(from, { replace: true });
                    })


                setError('');

            })
            .catch(error => {
                console.error(error);

            })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(password, email);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const cruser = {
                    email: user.email
                }
                fetch('https://your-food-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(cruser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('token-set', data.token)
                        navigate(from, { replace: true });
                    })

                form.reset();
                setError('');

            })
            .catch(error => {

                setError(error.message)
            })

    }
    return (
        <div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        name='email'
                        type="email"
                        placeholder="Name"
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
                        type="password"
                        name='password'
                        placeholder="Password"
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
            <p style={{ color: 'red' }}>{error}</p>
            <div>

                <Button className='my-1' onClick={handleGoogleSignIn}>
                    <i className="text-9xl mx-1 fa-brands fa-google"></i>
                    Google Log in
                </Button>
            </div>
        </div>
    );
};

export default Login;
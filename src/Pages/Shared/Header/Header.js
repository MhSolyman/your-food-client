import { Avatar, Button, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .than(() => { })
            .catch((error) => { console.log(error) })
    }


    return (
        <div>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="https://flowbite.com/">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Flowbite
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link
                        href="/navbars"
                        active={true}
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        About
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Services
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Pricing
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        {user?.displayName
                        }

                    </Navbar.Link>
                    <Navbar>
                        {
                            user?.uid ? <> <Link to={'/Myreviews'}>
                                <Navbar>
                                My reviews
                                </Navbar>

                            </Link> <Avatar
                                    img={user?.photoURL}
                                    rounded={true}
                                    bordered={true}
                                />

                                <Button onClick={handleLogOut}>
                                    Log Out
                                </Button>
                            </> : <>

                                <Link to={'/login'}>

                                    <Button>
                                        Log In
                                    </Button>

                                </Link> <Link to={'/register'}>

                                    <Button>
                                        Register
                                    </Button>

                                </Link>
                            </>
                        }


                    </Navbar>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
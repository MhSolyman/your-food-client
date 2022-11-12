import { Avatar, Button, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';
import './header.css'


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
                <Navbar.Brand >
                    <i className="fa-solid fa-burger xl"></i>
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        My Food
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar>
                        <Link to={'/'}>Home</Link>
                    </Navbar>

                    <Navbar>
                        <Link to={'/blog'}>Blog</Link>
                    </Navbar>

                    {
                        user?.uid ? <>
                            <Link to={'/Addservice'}>

                                <Navbar>
                                    Add service
                                </Navbar>


                            </Link>

                            <Link to={'/Myreviews'}>

                                <Navbar>
                                    My reviews
                                </Navbar>


                            </Link>

                            <Avatar
                                img={user?.photoURL}
                                rounded={true}
                                bordered={true}
                            />
                            <Navbar href="/navbars">
                                {user?.displayName}

                            </Navbar>

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



                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
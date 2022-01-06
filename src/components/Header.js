import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (

        <nav>
          <NavLink to='/' exact>
                <Button style={{ margin: '10px', padding: '10px', color: 'black' }}>Home</Button>
            </NavLink>
            <NavLink to='/login' >
                <Button style={{ margin: '10px', padding: '10px', color: 'black' }}>Login</Button>
            </NavLink>

            <NavLink to='/posts' >
                <Button style={{ margin: '10px', padding: '10px', color: 'black' }}>Posts</Button>
            </NavLink>
            <NavLink to='/postdata' >
                <Button style={{ margin: '10px', padding: '10px', color: 'black' }}>PostData</Button>

            </NavLink>
            <NavLink to='/signup' >
                <Button style={{ margin: '10px', padding: '10px', color: 'black' }}>SignUp</Button>
            </NavLink>
            <NavLink to='/fetchData' >
                <Button style={{ margin: '10px', padding: '10px', color: 'black' }}>FetchData</Button>
            </NavLink>
            <NavLink to='/form' exact>
                <Button style={{ margin: '10px', padding: '10px', color: 'black' }}>Form</Button>
            </NavLink>
        </nav>

    )
}

export default Header
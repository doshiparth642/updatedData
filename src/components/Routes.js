import React from 'react';
import Login from './Login';
import Signup from './Signup';
import { Route, Redirect, Switch } from 'react-router-dom';
import FetchData from './FetchData';
import Function from './Function';
import UserForm from './UserForm';
import PostData from "./PostData";
import UserComponent from "./UserComponent";


class Routes extends React.Component {
    render() {
        return (
            <>
                <Switch>
                    <Route exact path='/' component={UserComponent} />
                    <Route path='/login' component={Login} />
                    <Route path='/signup' component={Signup} />
                    <Route path='/postdata' component={PostData} />
                    <Route path='/form' component={UserForm} />
                    <Route path='/fetchData' component={FetchData} />
                    <Route path='/posts' component={Function} />
                    <Redirect to={UserComponent} />
                </Switch>


            </>
        )
    }
}

export default Routes
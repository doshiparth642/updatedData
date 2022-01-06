import React from 'react';
//var _ = require('lodash')
import { get } from 'lodash';
import { useHistory, withRouter } from 'react-router-dom';

//localStorage.setItem()
const Signup = () => {

    //const greeting = ["Hello", "World", "From", "React", 'Water', 'Banana', 'Apple', 'Water', 'Water', 'Banana', 'Apple', 'Water']


    var object = { 'a': [{ 'b': { 'c': 3 } }] };

    // var value = get(object, ['a', '0', 'b'], 'default');
    var value = get(object, 'a.b', 'default')
    console.log(value)
    console.log('Chages in master branch')





    /*let fullName = 'PARTH DOSHI'
    fullName = fullName.split(' ')
    document.write(fullName)
      var  initials = fullName[0].substring(0, 1).toUpperCase();

     document.write(initials)
    //console.log(initials)*/


    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Hello Signup</h1>


        </>
    );
};


export default (withRouter)(Signup);

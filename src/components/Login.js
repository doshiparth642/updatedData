import React from 'react';


class Login extends React.Component {

    state = {
        userName: 'Parth',
        showName: false,
        passWord: '',
        showPassword: false,

    }


    displayNameHandler = (e) => {
        let updatedName = e.target.value;
        this.setState({ userName: updatedName });
        //console.log(updatedName);  
    }

    displayPasswordHandler = (e) => {
        let updatedPassword = e.target.value;
        this.setState({ passWord: updatedPassword });
        //console.log(updatedName);  
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            showName: true,
            showPassword: true
        });
    }
    render() {

        return (
            <div>
                <h1>Hello Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <label><p>Username</p></label>
                    <input type="text" name="userName" onChange={this.displayNameHandler} value={this.state.userName} />

                    <br />

                    <label><p>Password</p></label>
                    <input type="password" name="passWord" onChange={this.displayPasswordHandler} value={this.state.passWord} />

                    <div>
                        <button type="submit" onClick={this.handleSubmit}>Login</button>
                    </div>
                    {this.state.showName && <p>"userName:" {this.state.userName}</p>}
                    {this.state.showPassword && <p>"passWord:" {this.state.passWord}</p>}
                    <br />


                </form>
            </div>
        );
    }
}



export default Login;
import React from 'react'
import { connect } from 'react-redux';
import { addUser } from '../actions/fetchActions';




class PostData extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })

    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        this.props.addUser(this.state);
        this.setState({
            userId: '',
            title: '',
            body: ''
        })

    }

    render() {
        const { userId, title, body } = this.state
        return (
            <div style={{ textAlign: 'center' }}>
                <form onSubmit={this.submitHandler}>
                    <div>

                        <input type='text' name='userId' value={userId} onChange={this.changeHandler} placeholder='Enter userId...' />
                    </div>
                    <div >
                        <input type='text' name='title' value={title} onChange={this.changeHandler} placeholder='Enter title...' />
                    </div>
                    <div>
                        <input type='text' name='body' value={body} onChange={this.changeHandler} placeholder='Enter data...' />
                    </div>
                    <button type='submit' style={{ margin: '8px', padding: '5px' }}>Post</button>
                </form>


            </div>

        )
    }
}






export default connect(null, { addUser })(PostData)
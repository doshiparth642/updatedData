import React, { Component } from "react";
import { connect } from "react-redux";
import { get } from 'lodash';
import { Table } from 'react-bootstrap';
import { getUserList } from '../actions/usersAction';




class UserList extends Component {

  componentDidMount() {
    this.props.loadUsersList();
  }
  render() {
    const { userlist } = this.props;

    return (
      <div style={{ margin: 110 }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {userlist.map(user => {
              return <tr key={user.name}>
                <td>#</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>;
            })}
          </tbody>
        </Table>
       
        
        
      </div>
    );
  }

}
const mapStateToProps = (state) => {
  return {
    userlist: get(state, ['users', 'data'], [])
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadUsersList: () => dispatch(getUserList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);

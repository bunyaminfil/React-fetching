import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    users: []
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(data => data.json()).then(users => {
      this.setState({
        users //users:users
      })
      console.log(users);
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {
          this.state.users.map(user =>
            <div key={user.id} className={"userList"}>{user.name} - @{user.username}</div>
          )
        }
      </div>
    )
  }
}
